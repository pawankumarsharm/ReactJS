import React from 'react'
import './myStyles.css'
function Stylesheets(props) {
    let className=props.primary ? 'primary' : ' '
    return (
        <div>
           <h1 className='primary'>Hello PAWAN</h1>
           <h1 className={`${className} font-xl`}>Hello pk</h1>
        </div>
    )
}

export default Stylesheets
