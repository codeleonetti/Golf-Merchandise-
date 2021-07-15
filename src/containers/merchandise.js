import React from 'react';
//import {connect} from 'react-redux';
import {useSelector} from 'react-redux'





const Merchandise = ()=> {
    const merchList = useSelector((state) => state.allProducts.merchandise);
    const {brand, product} = merchList;
    return(
        <div className='container'>
            <div className='brand'>{brand}</div>
            <div className='image'></div>
            <div className='product'>{product}</div>   
        </div>
       
    )



}


// const Merchandise = (props)=> {
//     console.log(props)
    
//     return(
//         <div className='container'>
            
//         </div>
       
//     )



// }


// export default connect(null, )(Merchandise);

export default Merchandise;