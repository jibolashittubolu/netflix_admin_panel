import './topbar.scss'

import React, { useContext } from 'react'
import { NotificationsNone, Translate, Settings  } from '@material-ui/icons'
import avatar from '../../assets/images/avatar.jpg'

import { logoutApiCall } from '../../context/authContext/authApiCalls'
import { AuthContext } from '../../context/authContext/AuthContext'

function Topbar() {
    const {dispatch} = useContext (AuthContext);

    const handleLogout = () => {
        logoutApiCall(dispatch)
    }

  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbarWrapperLeft'>
                <span className='logo'> AdminPanel </span>
            </div>
            <div className='topbarWrapperRight'>
                <div className='topbarWrapperIconContainer'>
                    <NotificationsNone />
                    <span className='notificationBadge'>2</span> 
                </div>
                <div className='topbarWrapperIconContainer'>
                    <Translate />
                </div>
                <div className='topbarWrapperIconContainer'>
                    <Settings />
                </div>
                <div className='topbarWrapperRightImageContainer'>
                    <img className='topbarWrapperRightImage' src={avatar} />
                    <a onClick={handleLogout} className='dropDown'>Logout
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar