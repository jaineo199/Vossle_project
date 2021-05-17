import React from 'react'
import Navbar from './Details/priceing';
import Plans from './Details/plans';
import Months from './Details/months';
import Bottom from './components/Bottom';
const Details = () => {
    return (
        <div>
            <Navbar/>
            <Plans/>
            <Months/>
            <Bottom/>
        </div>
    )
}

export default Details
