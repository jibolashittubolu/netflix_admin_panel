import React, { useState } from 'react'
import './productList.scss'

import {DataGrid} from '@material-ui/data-grid'
import {EditOutlined, DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { product_rows, user_rows } from '../../constants/data/dummyData'
import avatar from '../../assets/images/avatar.jpg'


function ProductList() {
    const [data, setData] = useState(product_rows)

    const handleDelete = (id) => {
        setData( data.filter ( 
          item => item.id !== id
        ))
      } 
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { 
          field: 'product',
          headerName: 'Product', 
          width: 180, 
          renderCell: (params) => {
            return (
              <div className='productContainer'>
                <img src={params.row.image} className='productImage'/>
                {params.row.name}
              </div>
            )
          }
        },
        // { field: 'avatar', headerName: 'Avatar', width: 130 },
        {
          field: 'stock',
          headerName: 'Stock',
          // type: 'number',
          width: 200,
        },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
          field: 'actions',
          headerName: 'Actions',
          width:150,
          renderCell: (params) => {
            return (
              <div className='productActionsContainer'>
                <Link to={'/products/' + params.row.id}>
                  <button className='productActionsEdit'>Edit</button>
                </Link>
                <DeleteOutline className='productActionsDelete' onClick={() => handleDelete(params.row.id)} />
              </div>
            )
          }
        }
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
      ];

  return (
    <div className='productList' style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
    </div>
  )
}

export default ProductList