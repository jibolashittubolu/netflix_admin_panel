import React, { useContext, useEffect, useState } from 'react'
import './listList.scss'

import {DataGrid} from '@material-ui/data-grid'
import {EditOutlined, DeleteOutline } from '@material-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { product_rows, user_rows } from '../../constants/data/dummyData'
import avatar from '../../assets/images/avatar.jpg'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { ListsContext } from '../../context/listContext/ListsContext'
import { deleteList, getLists } from '../../context/listContext/listsApiCalls'


function ListList() {
    const navigate = useNavigate()
    // const [data, setData] = useState(product_rows)
    const {lists, dispatch} = useContext(ListsContext)

    useEffect(() => {
      return () => {getLists(dispatch)};
    }, [dispatch])

    console.log(lists)

    const handleDelete = (id) => {
      deleteList(id, dispatch )
    //     // setData( data.filter ( 
    //     //   item => item.id !== id
    //     // )) 
      } 
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
          field: 'title',
          headerName: 'Title',
          // type: 'number',
          width: 200,
        },        
        {
          field: 'type',
          headerName: 'Type',
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
          field: 'actions',
          headerName: 'Actions',
          width:150,
          renderCell: (params) => {
            return (
              <div className='productActionsContainer'>
                <a onClick={()=> navigate(
                  '/lists/' + params.row._id, 
                  {state : 
                    {list : params.row }
                  }
                  )}>
                  <button className='productActionsEdit'>Edit</button>
                </a>
                <DeleteOutline className='productActionsDelete' onClick={() => handleDelete(params.row._id)} />
              </div>
            )
          }
        }        
    
      ];

  return (
    <div className='productList' style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={lists}
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

export default ListList