 import React from 'react'
import './user.scss'

import { Link, useLocation } from 'react-router-dom'
import { rows } from '../userList/UserList'
import avatar from '../../assets/images/avatar.jpg'
import { CalendarToday, LocationCity, LocationCityOutlined, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'


const User = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  console.log(path)
  //location.pathname corresponds to the url behind the base url. It includes the preceding forward slash also
  const user = rows[path - 1]
  //we pass the data object i.e rows to the User Component. 
  //then to know what user object to display - we use the useLocation hook from router-dom and pick the last item of the URL i.e /:id and use it to select the item from the rows database as above

  const bottomInfoItemsAccount = [
    {
      description: 'name',
      value: 'Annabeck',
      icon: <PermIdentity className='userDisplayBottomInfoIcon' />
    },
    {
      description: 'DOB',
      value: '01/01/1990',
      icon: <CalendarToday className='userDisplayBottomInfoIcon' />
    },

  ]

  const bottomInfoItemsContact = [
    {
      description: 'email',
      value: 'anna@gmail.com',
      icon: <MailOutline className='userDisplayBottomInfoIcon' />
    },
    {
      description: 'phone',
      value: '+234 815 873 0959',
      icon: <PhoneAndroid className='userDisplayBottomInfoIcon' />
    },
    {
      description: 'city',
      value: 'Lagos | Nigeria',
      icon: <LocationCityOutlined className='userDisplayBottomInfoIcon' />
    },

  ]

  return (
    <div className='user'>
        {/* <p>
          {JSON.stringify(user)}
        </p> */}
        <div className='userTitleContainer'>
          <h1 className='userTitleEdit'> Edit User</h1>
          <Link to='/newUser'>
            <button className='userAddButton'>Create</button>
          </Link>
        </div>
        <div className='userContainer'>
          <div className='userDisplay'>
            <div className='userDisplayTop'>
              <img src={avatar} alt='' className='userDisplayTopImage' />
              <div className='userDisplayTopTitle'>
                <span className='userDisplayName'>Anna Becker</span>
                <span className='userDisplayRole'>Software Developer</span> 
              </div>
            </div>
            <div className='userDisplayBottom'>
              <span className='userDisplayBottomTitle'>Account Details</span>
              {
                bottomInfoItemsAccount.map( element => (
                  <div className='userDisplayBottomInfo'>
                    {element.icon}
                    <span className='userDisplayBottomInfoTitle'> {element.value}
                    </span>
                  </div>
                ))
              }
              <span className='userDisplayBottomTitle'>Contact Details</span>
              {
                bottomInfoItemsContact.map( element => (
                  <div className='userDisplayBottomInfo'>
                    {element.icon}
                    <span className='userDisplayBottomInfoTitle'> {element.value}
                    </span>
                  </div>
                ))
              }
              

            </div>
          </div>
          <div className='userUpdate'>
            <span className='userUpdateTitle'>Edit</span>
            <form className='userUpdateForm'>
              <div className='userUpdateLeft'>
                <div className='userUpdateItem'>
                  <label className='inputLabel'>Username</label>
                  <input type='text' placeholder='annabeck99' className='userUpdateInput' />
                </div>
                <div className='userUpdateItem'>
                  <label>Full Name</label>
                  <input type='text' placeholder='Anna Becker' className='userUpdateInput' />
                </div>
                <div className='userUpdateItem'>
                  <label>Email</label>
                  <input type='text' placeholder='jibolashittubolu@gmail.com' className='userUpdateInput' />
                </div>
                <div className='userUpdateItem'>
                  <label>Phone</label>
                  <input type='text' placeholder='+234 81...' className='userUpdateInput' />
                </div>
                <div className='userUpdateItem'>
                  <label>Address</label>
                  <input type='text' placeholder='New York | USA' className='userUpdateInput' />
                </div>

               
              </div>
              <div className='userUpdateRight'>
                <div className='userUpdateRightUpload'>
                  <img className='userUpdateRightImage' src={avatar} />
                  <label htmlFor='fileUpload'>
                    <PermIdentity className='userUpdateIcon' style={{fontSize:'30px'}}/>
                  </label>
                  <input type='file' id='fileUpload' style={{display:'none'}}/>
                </div>
                <button className='userUpdateButton'>Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default User
