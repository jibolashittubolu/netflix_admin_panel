import './topbar.scss'

import React from 'react'
import { NotificationsNone, Translate, Settings  } from '@material-ui/icons'
import avatar from '../../assets/images/avatar.jpg'

function Topbar() {
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
                <img className='topbarWrapperRightImage' src={avatar} />
            </div>
        </div>
    </div>
  )
}

export default Topbar