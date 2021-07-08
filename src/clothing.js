import React from 'react'



const GolfClothing = (props)=>{

    return(<>

        <h2>Clothing</h2>
        <h5 onClick = {()=> {console.log("yup clicked as well")}} >{props.a}</h5>

    </>)

}

export default GolfClothing