import React, { useState } from 'react'
import './userlist.scss'
import avatar from '../../assets/images/avatar.jpg'

import {DataGrid} from '@material-ui/data-grid'
import {EditOutlined, DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'

// const imageName = URL.createObjectURL(avatar)


export const rows = [
  { 
    id: 1, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 2, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 3, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 4, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 5, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 6, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 7, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 8, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 9, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 10, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  { 
    id: 11, 
    userName: 'john', 
    avatar: avatar, 
    email: 'john@gmail.com',
    status:'active',
    transaction: '$120.00'
  },
  
];

const UserList = () => {
  // params.row.[keyname] is passed as renderprop to the column list. or the column prop in the GridTable component.
  // i.e column prop can access row prop from params.row.[keyname]

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'userName',
      headerName: 'Username', 
      width: 180, 
      renderCell: (params) => {
        return (
          <div className='userNameContainer'>
            <img src={avatar} className='userNameImage'/>
            {params.row.userName}
          </div>
        )
      }
    },
    // { field: 'avatar', headerName: 'Avatar', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      // type: 'number',
      width: 200,
    },
    { field: 'status', headerName: 'Avatar', width: 130 },
    { field: 'transaction', headerName: 'Transaction', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width:150,
      renderCell: (params) => {
        return (
          <div className='userActionsContainer'>
            <Link to={'/users/' + params.row.id}>
              <button className='userActionsEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userActionsDelete' onClick={() => handleDelete(params.row.id)} />
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
  

  
  function DataTable() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }

  const [data, setData] = useState(rows)
  
  const handleDelete = (id) => {
    setData( data.filter ( 
      item => item.id !== id
    ))
  } 

  return (
    <div className='userList'>
      <DataTable />
    </div>
  )
}

// export {rows}
export default UserList