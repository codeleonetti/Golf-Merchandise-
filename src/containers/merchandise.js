import React, { Component } from 'react'

import { render } from 'react-dom'



const Merchandise = (props)=> {
    
    return(
        <h3 onClick ={()=> console.log("you are clicking me")} >{props.a}</h3>
    )



}





export default Merchandise