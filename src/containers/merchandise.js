import React from 'react';
import {connect} from 'react-redux';
//import {useSelector} from 'react-redux'

const Merchandise = (props)=> {
    const {image,product,price}=props.p
    
    return(
        <div className='container'>
            
            <div className="image"><img src={image}/></div>
            <div className="product">{product}</div>
            <div className="price">{price}</div>
        </div>
       
    )



}


export default connect(null, )(Merchandise);




// const Merchandise = ()=> {
//     const merchList = useSelector((state) => state.allProducts.merchandise);
//     const {brand, product} = merchList;
//     return(
//         <div className='container'>
//             <div className='brand'>{brand}</div>
//             <div className='image'></div>
//             <div className='product'>{product}</div>   
//         </div>
       
//     )

// }
//export default Merchandise;