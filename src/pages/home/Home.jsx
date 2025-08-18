import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.scss'
import {userData} from '../../constants/data/Data'

import {WidgetSmall, WidgetLarge} from '../../components/widgets/Widgets'
import UserList from '../userList/UserList'

import axios from 'axios';
import { useEffect, useState, useMemo, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext/AuthContext'
import { logoutApiCall } from '../../context/authContext/authApiCalls'

function Home() {
  const navigate = useNavigate()
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], [])
  const {dispatch} = useContext(AuthContext);


  const [userStats, setUserStats] = useState([]);
  var temp_store = []

  useEffect(() => {
    const getStats = async() => {
      try{
        const res = await axios.get(
                  `/users/stats`,
                  {
                      headers: {
                          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                      }
                  }
        )

        const sortedList = res.data.sort((a,b) => {
          return a._id - b._id
        }
        )

        sortedList.map((item) => (
          temp_store.push(
            {
              name: MONTHS[item._id-1], 
              "New Users": item.total
            }
          )
        ))
              
        // console.log(temp_store.length)
              
        setUserStats(temp_store)
        // console.log(userStats) 

        // res.data.map((item) => 
        //   setUserStats((prev)=> 
        //     [...prev, {name:MONTHS[item._id-1],
        //     "New Users":item.total }] 
        //     )
        //   )

        // setUserStats(res.data)
        // res.data.map((item) => console.log(item))

        // setUserStats(res.data) 
        // console.log(temp_store)
      }
      catch(err){
        console.log(err)
        const status = err.response.status
        if (status === 403){
          const handleLogout = () => {
            logoutApiCall(dispatch)
          }
          handleLogout()
        }
        //removes the old token and the user object entirely
        //since we always use 
      }
    }
    return () => {getStats()}
    // getStats()
  }, [MONTHS])

  // userStats.map((item) => 
  // setUserStats((prev)=> 
  // [...prev, {name:MONTHS[item._id-1],
  //   "New Users":item.total }] 
  //   )
  //   )

  // console.log(userStats)
  // console.log(temp_store)

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart 
        data={userStats} 
        title='User Analytics' dataKey='New Users' 
        grid />
        <div className='homeWidgets'>
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
        {/* <UserList/> */}
    </div>
  )
}

export default Home
