import logo from './logo.svg';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import {Routes, Route, useNavigate} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function AppInt() {
  return (
    // <Routes>  
      <div className='app'>  
        <Topbar />
        <div className='container'>
          <Sidebar  />
          {/* <Home /> */}
          <div className='others'>
            <Routes>
              <Route path='/' element={<Home/>} exact />
              <Route path='/home' element={<Home/>}/>
              <Route path='/users' element={<UserList/>}/>
              <Route path='/users/:id' element={<User/>}/>
              <Route path='/newUser' element={<NewUser/>}/>
              <Route path='/products' element={<ProductList/>}/>
              <Route path='/products/:productId' element={<Product/>}/>
              <Route path='/newProduct' element={<NewProduct/>}/>
            </Routes>
          </div>
        </div>
      </div>
    // </Routes>

  );
}


const AppInt2 = () => {
  return (
    <div>App</div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <AppInt />
    </BrowserRouter>
    // <Routes>
      // <Route path='/' element={<AppInt/>} />
      //{/* <Route path='/' element={<Ave/>} /> */}
    // </Routes>
  )
}


export default App;
