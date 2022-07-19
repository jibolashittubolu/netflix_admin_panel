import React, { useContext, useEffect, useState } from 'react'
import './productList.scss'

import {DataGrid} from '@material-ui/data-grid'
import {EditOutlined, DeleteOutline } from '@material-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { product_rows, user_rows } from '../../constants/data/dummyData'
import avatar from '../../assets/images/avatar.jpg'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { deleteMovie, getMovies } from '../../context/movieContext/movieApiCalls'


function ProductList() {
    const navigate = useNavigate()
    // const [data, setData] = useState(product_rows)
    const {movies, dispatch} = useContext(MovieContext)

    useEffect(() => {
      return () => {getMovies(dispatch)};
    }, [dispatch])

    console.log(movies)

    const handleDelete = (id) => {
      deleteMovie(id, dispatch )
        // setData( data.filter ( 
        //   item => item.id !== id
        // )) 
      } 
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 100 },
        { 
          field: 'movie',
          headerName: 'Movie', 
          width: 180, 
          renderCell: (params) => {
            return (
              <div className='productContainer'>
                <img src={params.row.image} className='productImage'/>
                {params.row.title}
              </div>
            )
          }
        },
        // { field: 'avatar', headerName: 'Avatar', width: 130 },
        {
          field: 'genre',
          headerName: 'Genre',
          // type: 'number',
          width: 120,
        },        
        {
          field: 'genre',
          headerName: 'Genre',
          // type: 'number',
          width: 120,
        },        
        {
          field: 'year',
          headerName: 'Year',
          // type: 'number',
          width: 120,
        },        
        {
          field: 'limit',
          headerName: 'Limit',
          // type: 'number',
          width: 120,
        },        
        {
          field: 'isSeries',
          headerName: 'isSeries',
          // type: 'number',
          width: 120,
        },
        // { field: 'status', headerName: 'Status', width: 130 },
        // { field: 'price', headerName: 'Price', width: 130 },
        {
          field: 'actions',
          headerName: 'Actions',
          width:150,
          renderCell: (params) => {
            return (
              <div className='productActionsContainer'>
                {/* <Link to={'/movies/' + params.row._id}>
                  <button className='productActionsEdit'>Edit</button>
                </Link> */}
                <a onClick={()=> navigate(
                  '/movies/' + params.row._id, 
                  {state : 
                    {movie : params.row }
                  }
                  )}>
                  <button className='productActionsEdit'>Edit</button>
                </a>
                <DeleteOutline className='productActionsDelete' onClick={() => handleDelete(params.row._id)} />
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
          rows={movies}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
    </div>
  )
}

export default ProductList