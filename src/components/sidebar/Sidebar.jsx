import './sidebar.scss'
import React, { useState } from 'react'

import {LineStyle, Timeline, TrendingUp, Settings, Translate, Airplay, EcoTwoTone, Android, ListAlt} from '@material-ui/icons'
import { Link } from 'react-router-dom'
// import { Value } from 'sass'

const sidebarMenuItems = [
  {
    id:'dashboard',
    sidebarTitle:'Dashboard', 
    sidebarListItems:['Home', 'Analytics', 'Sales'],
    icons:[
      <LineStyle className='sidebarIcon'/>, 
      <Timeline className='sidebarIcon'/>, 
      <Translate className='sidebarIcon'/>
    ]
  },
  {
    id:'quickmenu',
    sidebarTitle:'Quick Menu', 
    sidebarListItems:['Users', 'Movies', 'Lists', 'Transactions', 'Reports' ],
    icons:[
      <LineStyle className='sidebarIcon'/>, 
      <Airplay className='sidebarIcon'/>, 
      <ListAlt className='sidebarIcon' />, 
      <Translate className='sidebarIcon'/>,
      <Settings className='sidebarIcon'/>
    ]
  },
  {
    id:'notifications',
    sidebarTitle:'Notifications', 
    sidebarListItems:['Mail', 'Feedback', 'Messages'],
    icons:[
      <LineStyle className='sidebarIcon'/>, 
      <Timeline className='sidebarIcon'/>, 
      <Translate className='sidebarIcon'/>
    ]
  },
  {
    id:'staff',
    sidebarTitle:'Staff', 
    sidebarListItems:['Manage', 'Analytics', 'Reports'],
    icons:[
      <LineStyle className='sidebarIcon'/>, 
      <Timeline className='sidebarIcon'/>, 
      <Translate className='sidebarIcon'/>
    ]
  },
  
]

function Sidebar() {
  const initial_state = {
    dashboard:null,
    quickmenu:null,
    notifications:null,
    staff:null
  }
  // the reason for the above initial state is to set the other elements to null as the object is spread and the required key updated
  //in the setState method. After the required key is updated, the above will help to make the others unselected

  const [clickedState, setClickedState] = useState(initial_state)

  // declare a state as object using the same 
  // use the same name for a key in the object to be mapped, with the name you use to declare the initial state so that you can always use the same array key to modify the state object
  // we have different states for different sidebar partitions.
  // the partitions means each element of the sidebarMenuItems variable
  // check the sidebarMenuItems variable for the partitions if in doubt
  // the below is the meat of the code
  // clickedState[element1.id] translate to either 'dashboard', 'quickmenu', etc
  // and dont forgeet that clickedState is and object so its like saying clickedState.dashboard or clickedState.quickmenu etc
  // clickedState.[element1.id] will always have a number Value
  // That is why we use the array key to check it and set the className afterward
  //    MEAT starts
  // className={key !== clickedState[element1.id] ? 'sidebarListItem' : 'sidebarListItem active'}
  // onClick={() => setClickedState(prev => ({...prev, [element1.id]:key}) )}
  //    MEAT ends
  // now to set a className to animate as clicked
  // we check if the key of the mapped element is equal to the clickedState of the particular partition
  // so each partition has their ministate inside the clickedState
  // FOR CLICKING
  // Now to ensure that a click from another partition does not overwrite the whole clickedState,
  // we use the object spread literal and only spread the partition state of the state we need modified.
  //we also use the dynamic key construct to pick the needed key with [element1.id] and spread the partition that we need to be modified


  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
      {/* the below code is a mini engine. Hyped though! */}
      {
        sidebarMenuItems.map((element1, index) => 
          <div className='sidebarMenu' key={index}>
            <h3 className='sidebarTitle'>{element1.sidebarTitle}</h3>
            <ul className='sidebarList'>
              {
                element1.sidebarListItems.map( (element2, key) => 
                <Link to={element2.toLowerCase()} className='link' key={key}>
                  <li 
                  className={key !== clickedState[element1.id] ? 'sidebarListItem' : 'sidebarListItem active'}
                  // onClick={() => setClickedState(prev => ({...prev, [element1.id]:key}) )}
                  // onClick={() => setClickedState(prev => ({...initial_state, [element1.id]:key}) )}
                  onClick={() => setClickedState({...initial_state, [element1.id]:key} )}
                  >
                  
                    {element1.icons[key]}
                    {element2}
                  </li>
                </Link>
                )
              }
              {/* Since we have decided to use multiple map functions. How do we insert a map inside another map. e.g element.icons is rendered alongside element.sidebarListItems - which begs the question, which of the arrays do we map and how do we render the 2nd array inside the already chosen mapped array. 
              In this case we were able to overcome the constraint because the number of elements in element.icons and element.sidebarListItems are always equal, Hence we used the array key(from element.sidebarItems.map(element2,key)) to set the index for displaying the element.icons */}
            </ul>
          </div>   
        )
      }
      


      </div>
    </div>
  )
}

export default Sidebar