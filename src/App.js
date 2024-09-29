import logo from './logo.svg';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
 
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

import  {AuthContext, AuthContextProvider}  from './context/authContext/AuthContext';

import Login from './pages/login/Login';
import React, { useContext } from 'react';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListsContextProvider } from './context/listContext/ListsContext';

import ListList from './pages/listList/ListList';
import List from './pages/list/list';
import NewList from './pages/newList/NewList';

// How do we verify if our token is still valid?
// Do we time localStorage authentication to delete after the duration we have set in our token validity period
// If the user is receiving a 403 forbidden, let us tell the user the session is expired and redirect the user to the login page 


function AppInt() {
  const {user} = useContext(AuthContext)

  return (
            <Routes>
              <Route path='/login' element={user ? <Navigate to='/home' /> : <Login/> }/>
              <Route path='/*' element={<AppInt2/>} exact />
            </Routes>
  );
}


function AppInt2() {
  const {user} = useContext(AuthContext)

  return (
    user ?
    <div className='app'>  
        <Topbar />
        <div className='container'>
          <Sidebar />
          <div className='others'>
            <Routes>
              <Route path='/' element={<Home/>} exact />
              <Route path='/home' element={<Home/>}/>
              <Route path='/users' element={<UserList/>}/>
              <Route path='/users/:id' element={<User/>}/>
              <Route path='/newUser' element={<NewUser/>}/>
              <Route path='/movies' element={<ProductList/>}/>
              <Route path='/movies/:movieId' element={<Product/>}/>
              <Route path='/newMovie' element={<NewProduct/>}/>
              <Route path='/lists' element={<ListList />}/>
              <Route path='/lists/:listId' element={<List/>}/>
              <Route path='/newList' element={<NewList />}/>
            </Routes>
          </div>
        </div>
      </div>
      : <Navigate to='/login' />
  );
}


export const App = () => {
  return (
    <AuthContextProvider>
        <ListsContextProvider>
      <MovieContextProvider>
          <BrowserRouter>
            <AppInt />
          </BrowserRouter>
      </MovieContextProvider>
        </ListsContextProvider>
    </AuthContextProvider>
  )
}


export default App;
