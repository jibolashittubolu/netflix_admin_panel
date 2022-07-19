import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.scss'
import {product_data}from '../../constants/data/dummyData'
import avatar from '../../assets/images/avatar.jpg'
import {PermIdentity} from '@material-ui/icons' 


function Product() {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to='/newProduct'>
            <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart data={product_data} dataKey='sales' title='Sales Performance'/>
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <img src={avatar} className='productInfoTopImage' />
              <span className='productInfoName'>Apple Airpods</span>
            </div>
            <div className='productInfoBottom'>
              <div className='productInfoItem'>
                <span className='productInfoKey'>id:</span>
                <span className='productInfoValue'>123</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>sales</span>
                <span className='productInfoValue'>3443</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>active</span>
                <span className='productInfoValue'>yes</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>in stock:</span>
                <span className='productInfoValue'>no</span>
              </div>
              
            </div>
          </div>
        </div>
        <div className='productBottom'>
          <form className='productForm'>
            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type='text' placeholder='Apple AirPod' />
              <label>In Stock</label>
              <select name='inStock' id='idStock'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
              <label>Active</label>
              <select name='active' id='active'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
            </div>
            <div className='productFormRight'>
              <div className='productUpload'>
                <img src={avatar}  className='productUploadImage' />
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