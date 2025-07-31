import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './list.scss'
import {product_data}from '../../constants/data/dummyData'
import avatar from '../../assets/images/avatar.jpg'
import {PermIdentity} from '@material-ui/icons' 

function List() {
  const location = useLocation();
  const list = location.state.list;

  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>List </h1>
            <Link to='/newList'>
            <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart data={product_data} dataKey='sales' title='Streams / Views(per month)'/>
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <span className='productInfoName'>{list.title}</span>
            </div>
            <div className='productInfoBottom'>
              <div className='productInfoItem'>
                <span className='productInfoKey'>id:</span>
                <span className='productInfoValue'>{list._id}</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>type</span>
                <span className='productInfoValue'>{list.type}</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>genre</span>
                <span className='productInfoValue'>{list.genre}</span>
              </div>
              {/* <div className='productInfoItem'>
                <span className='productInfoKey'>Limit</span>
                <span className='productInfoValue'>{list.limit}</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className='productBottom'>
          <form className='productForm'>
            <div className='productFormLeft'>
              <label>List Title</label>
              <input type='text' placeholder={list.title} />
              <label>Type  </label>
              <input type='text' placeholder={list.type} />              
              <label>Genre</label>
              <input type='text' placeholder={list.genre} />              
              <label>Limit</label>
              <input type='text' placeholder={list.limit} />                          
            </div>
            <div className='productFormRight'>
              <button className='productButton'>Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default List
