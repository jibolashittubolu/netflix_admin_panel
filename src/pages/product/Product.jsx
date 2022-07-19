import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.scss'
import {product_data}from '../../constants/data/dummyData'
import avatar from '../../assets/images/avatar.jpg'
import {PermIdentity} from '@material-ui/icons' 


function Product() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Movie </h1>
            <Link to='/newMovie'>
            <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart data={product_data} dataKey='sales' title='Streams / Views(per month)'/>
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <img src={movie.image} className='productInfoTopImage' />
              <span className='productInfoName'>{movie.title}</span>
            </div>
            <div className='productInfoBottom'>
              <div className='productInfoItem'>
                <span className='productInfoKey'>id:</span>
                <span className='productInfoValue'>{movie._id}</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>Total streams</span>
                <span className='productInfoValue'>3443</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>Year</span>
                <span className='productInfoValue'>{movie.year}</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>Limit</span>
                <span className='productInfoValue'>{movie.limit}</span>
              </div>
              
            </div>
          </div>
        </div>
        <div className='productBottom'>
          <form className='productForm'>
            <div className='productFormLeft'>
              <label>Movie Title</label>
              <input type='text' placeholder={movie.title} />
              <label>Year</label>
              <input type='text' placeholder={movie.year} />              <label>Genre</label>
              <input type='text' placeholder={movie.genre} />              <label>Limit</label>
              <input type='text' placeholder={movie.limit} />              <label>Trailer</label>
              <input type='file' placeholder={movie.trailer} />              <label>Video</label>
              <input type='file' placeholder={movie.video} />              
              {/* <label>In Stock</label>
              <select name='inStock' id='idStock'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select> */}
            </div>
            <div className='productFormRight'>
              <div className='productUpload'>
                <img src={movie.image}  className='productUploadImage' />
                <label htmlFor='file'>
                  <PermIdentity />
                </label>
                <input type='file' id='file' style={{display:'none'}} />
              </div>
              <button className='productButton'>Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Product