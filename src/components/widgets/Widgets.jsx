import React, { useEffect, useState } from 'react'
import './widgets.scss'
import avatar from '../../assets/images/avatar.jpg'
import { Visibility } from '@material-ui/icons'
import axios from 'axios'


export const WidgetSmall = () => {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "/users?new=true",
          {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }
        )
        // console.log(res)
        setNewUsers(res.data)
      } 
      catch (err) {
        console.log(err);
      }
    }
    return () => {getNewUsers()}
  }, [])

  // console.log(newUsers)
  return (
    <div className='widgetSmall'>
        <span className='widgetSmallTitle'>
            New Joined Members
        </span>
        <ul className='widgetSmallList'>
          {newUsers.map((user, index) => (
            <li key={index} className='widgetSmallListItem'>
                    <img src={user.profilePic ||avatar} className='widgetSmallImage' />
                    <div className='widgetSmallAbout'>
                        <span className='widgetSmallName'>{user.username}</span>
                        <span className='widgetSmallRole'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallDisplayButton'>
                        <Visibility className='widgetSmallDisplayIcon'/>
                        Display
                    </button>
            </li>
            )
          )}
        </ul>
    </div>
  )
}


export const WidgetLarge = () => {

  const widgetLargeItems= [
    {buttonType:'Declined'},
    {buttonType:'Declined'},
    {buttonType:'Pending'},
    {buttonType:'Approved'},
  ]

  const Button = ({type}) => {
    return(
      <button className={'widgetLargeButton ' + type}>{type}</button>
    )
  }

  return (
    <div className='widgetLarge'>
        <h3 className='widgetLargeTitle'> Widget WidgetLarge</h3>
        <table className='widgetLargeTable'>
          <tbody>
            <tr className='widgetLargeTr'>
              <th className='widgetLargeTh one' id='widgetLargeTh1'>Customer</th>
              <th className='widgetLargeTh'>Date</th>
              <th className='widgetLargeTh'>Amount</th>
              <th className='widgetLargeTh'>Status</th>
            </tr>
            {
              widgetLargeItems.map((element, index) => 
            (
            <tr className='widgetLargeTr' key={index}>
              <td className='widgetLargeUser'>
                <img src={avatar} className='widgetLargeImage'  />
                <span className='widgetLargeName'>Susan Carol</span>
              </td>
              <td className='widgetLargeDate'>2 Jun 2021</td>
              <td className='widgetLargeAmount'>$122.20</td>
              <td className='widgetLargeStatus'>
                <Button type={element.buttonType}/>
                {/* className={'widgetLargeButton' + element.buttonType} */}
              </td>
            </tr>
            )
              )
            }
          </tbody>
        </table>
    </div>
  )
}

function Widgets() {
  return (
    <div>Widgets</div>
  )
}

export default Widgets

