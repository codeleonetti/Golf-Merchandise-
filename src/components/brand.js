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

    return(
        <div className="brandContainer">
            {allGolfBrands}
        </div>
    
    )
   
    }

  

}
export default Brand


//<></> = fragments
        // {id: 1,  brand: 'Titleist'}, 
        // {id: 2,  brand: 'Callaway'}, 
        // {id: 3,  brand: 'TaylorMade'}, 
        // {id: 4,  brand: 'Mizuno'}, 
        // {id: 5,  brand: 'Cobra'}, 
        // {id: 6,  brand: 'Ping'}, 
        // {id: 7,  brand: 'Cleveland'},
        // {id: 8,  brand: 'Odyssey'}, 
        // {id: 9,  brand: 'Ben Hogan'}, 
        // {id: 10, brand: 'Srixon'}, 
        // {id: 11, brand: 'PXG'}, 
        // {id: 12, brand: 'Nike'}, 
        // {id: 13, brand: 'Greg Norman'}, 
        // {id: 14, brand: 'Puma'}, 
        // {id: 15, brand: 'Adidas'}, 
        // {id: 16, brand: 'Oakley'},
        // {id: 17, brand: 'Under Armour'}, 
        // {id: 18, brand: 'Foot Joy'}, 
        // {id: 19, brand: 'Skechers'}