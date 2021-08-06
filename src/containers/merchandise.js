import React from 'react';
import Counter from '../components/counter';
import {connect} from 'react-redux';


const Merchandise = ({image,product,price})=> {
    const {widthProp}="20%"
    console.log(image, product, price)

    
    
    return (
        <div class="col mt-4">
            <div class="card"  style={widthProp}>
               <div class="card-body">
                   <img src={image} class="card-img-top" />
                   <p class="card-text">{product}</p>
                   <p class="card-text price">{price}</p>
                    <Counter/>
               </div>
              
            </div> 
       </div>
    )
}




export default connect(null, )(Merchandise);

