import React from 'react'
import './newProduct.scss'

function NewProduct() {
  return (
<div className='addProduct'>
        <h1 className='addProductTitle'>New Product </h1>
        <form className='addProductForm'>
            <div className='addProductItem'>
                <label>Image </label >
                <input type='file' id='file' className='fileInputImage'/>
            </div>            
            <div className='addProductItem'>
                <label>Name</label>
                <input type='text' placeholder='Apple Airpods' />
            </div>            
            <div className='addProductItem'>
                <label>Stock</label>
                <input type='text' placeholder='123' />
            </div>
            <div className='addProductItem'>
                <label>Active</label>
                <select className='addProductSelect' name='active' id='active'>
                    {/* <option> </option> */}
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>
            <button className='addProductButton'>Create</button>
        </form>
    </div>
  )
}

export default NewProduct