import React from 'react'
import './widgets.scss'
import avatar from '../../assets/images/avatar.jpg'
import { Visibility } from '@material-ui/icons'


export const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
        <span className='widgetSmallTitle'>
            New Joined Members
        </span>
        <ul className='widgetSmallList'>
            <li className='widgetSmallListItem'>
                    <img src={avatar} className='widgetSmallImage' />
                    <div className='widgetSmallAbout'>
                        <span className='widgetSmallName'>Anna Kellwer</span>
                        <span className='widgetSmallRole'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallDisplayButton'>
                        <Visibility className='widgetSmallDisplayIcon'/>
                        Display
                    </button>
            </li>
            <li className='widgetSmallListItem'>
                    <img src={avatar} className='widgetSmallImage' />
                    <div className='widgetSmallAbout'>
                        <span className='widgetSmallName'>Anna Kellwer</span>
                        <span className='widgetSmallRole'>Software Engineer</span>
                    </div>
                    <button className='widgetSmallDisplayButton'>
                        <Visibility className='widgetSmallDisplayIcon'/>
                        Display
                    </button>
            </li>
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
          <tr className='widgetLargeTr'>
            <th className='widgetLargeTh one' id='widgetLargeTh1'>Customer</th>
            <th className='widgetLargeTh'>Date</th>
            <th className='widgetLargeTh'>Amount</th>
            <th className='widgetLargeTh'>Status</th>
          </tr>
          {
            widgetLargeItems.map((element) => 
          (
          <tr className='widgetLargeTr'>
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

