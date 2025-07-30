import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.scss'



const featuredInfoItems = [
    {
        featuredTitle:'Revenue',
        featuredMoney:'$2,415',
        featuredMoneyRate: -11.4,
    },    
    {
        featuredTitle:'Sales',
        featuredMoney:'$4,415',
        featuredMoneyRate: +2.4,
    },    
    {
        featuredTitle:'Cost',
        featuredMoney:'$2,415',
        featuredMoneyRate: -5.5,
    },
]


function FeaturedInfo() {
  return (
    <div className='featuredInfo'>
        {
            featuredInfoItems.map((element, index) =>
                <div className='featuredItem' key={index}>
                    <span className='featuredTitle'>{element.featuredTitle}</span>
                    <div className='featuredMoneyContainer'>
                        <span className='featuredMoney'>{element.featuredMoney}</span>
                        <span className='featuredMoneyRate'>
                            {element.featuredMoneyRate > 0 ? ('+'+JSON.stringify(element.featuredMoneyRate)) : element.featuredMoneyRate} 

                            {element.featuredMoneyRate > 0 ? <ArrowUpward className='featuredIcon positive'/> : <ArrowDownward className='featuredIcon negative'/>}
                        </span>
                    </div>
                    <span className='featuredSub'>Compared to last month</span>
                </div>
            )
        }

    </div>
  )
}

export default FeaturedInfo
