import React from 'react'  
import { render } from 'react-dom'

class Brand extends React.Component{

    state = {
        allBrands:[
        'Titleist', 'Callaway', 'TaylorMade', 'Mizuno', 'Cobra', 'Ping', 'Cleveland',
            'Odyssey', 'Ben Hogan', 'Srixon', 'PXG', 'Nike', 'Greg Norman', 'Puma', 'Adidas',
            'Oakley', 'Under Armour', 'Foot Joy', 'Skechers'
        ]
    }

    render(){

    const allGolfBrands= this.state.allBrands.map( (brand) =>{return  <h3 onClick = {()=>console.log("clicked") }>{brand}</h3>})

    return(<>
    {allGolfBrands}
    </>)
   
    }
}
export default Brand


//<></> = fragments