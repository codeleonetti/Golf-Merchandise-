import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
//import {useSelector} from 'react-redux'

const Merchandise = (props)=> {
    const {image,product,price}=props.p
    
    return(
        <div className="container">
            <div className="rows">
                <div className="columns">1 of 3
                    <div class="row align-self-center">
                    <div className="image"><img src={image}/></div>
                    <div className="product">{product}</div>
                    <div className="price">{price}</div>
                    </div>
                </div>
            </div>
        </div>

        // <Container>
        //     <Row>

        //     </Row>
        // </Container>


       
//        <div className="row align-items-center">
//          <div class="col marginable">
//             <div className="image"><img src={image}/></div>
//             <div className="product">{product}</div>
//             <div className="price">{price}</div>
//          </div>
//          <div class="container">
//   <div class="row">
//     <div class="col align-self-start">
//       One of three columns
//     </div>
//     <div class="col align-self-center">
//       One of three columns
//     </div>
//     <div class="col align-self-end">
//       One of three columns
//     </div>
//   </div>
// </div>

//        </div>
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