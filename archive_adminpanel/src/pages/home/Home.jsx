import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.scss'

import {userData} from '../../constants/data/Data'

import {WidgetSmall, WidgetLarge} from '../../components/widgets/Widgets'
import UserList from '../userList/UserList'

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title='User Analytics' dataKey='ActiveUsers' grid />
        <div className='homeWidgets'>
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
        {/* <UserList/> */}
    </div>
  )
}

export default Home