import React from 'react';
import {connect} from 'react-redux';
// import { Card } from 'react-bootstrap';
//import {useSelector} from 'react-redux'

const Merchandise = (props)=> {
    const {image,product,price}=props.p
    const {widthProp}="20%"
    console.log(image, product, price)
    
    return(
        <div class="col mt-4">
            <div class="card"  style={widthProp}>
               <div class="card-body">
                   <img src={image} class="card-img-top" />
                   <p class="card-text">{product}</p>
                   <p class="card-text price">{price}</p>   
               </div>
            </div> 
       </div>



        // <div className="container">
           
        //     <div class="row align-self-center">
        //      <div className="image"><img src={image}/></div>
        //      <div className="product">{product}</div>
        //      <div className="price">{price}</div>
        //     </div>
                 
        //  </div>
        
            // <div className="row row-cols-1 row-cols-md-3 g-4">
            //     <div className="col"> 
            //         <div className="card h-100">
            //                 <img src={image}className="card-img-top" alt="...">
            //                 <div className="card-body">
            //                 <h5 className="card-title">{product}</h5>
            //                 <p className="card-text">{price}</p>
            //                 </div>
            //             </img>
            //             </div>
            //         </div>
            //         <div className="col">
            //             <div className="card h-100">
            //                 <img src="..." className="card-img-top" alt="...">
            //                 <div className="card-body">
            //                 <h5 className="card-title">Card title</h5>
            //                 <p className="card-text">This is a short card.</p>
            //                 </div>
            //             </img>
            //             </div>
            //         </div> 
            //             <div className="col">
            //             <div className="card h-100">
            //                 <img src="..." className="card-img-top" alt="...">
            //                 <div className="card-body">
            //                 <h5 className="card-title">Card title</h5>
            //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            //                 </div>
            //             </img>
            //             </div>
            //         </div>
            //             <div className="col">
            //             <div className="card h-100">
            //                 <img src="..." className="card-img-top" alt="...">
            //                 <div className="card-body">
            //                 <h5 className="card-title">Card title</h5>
            //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //                 </div>
            //             </img>
            //             </div>
            //         </div>
            // </div>
        

    )
}





export default connect(null, )(Merchandise);

// {/* // 
   
   
//            //  <div className="rows">
//            //        <div className="columns">1 of 3 
   
//            // <Card>
//            //    <Card.body>
//            //        <Card.Img src={image}/>
//            //        <Card.Text>{product}</Card.Text>
//            //        <Card.Text>{price}</Card.Text>
//            //    </Card.body>
//            // </Card> */}




// {/* // const Merchandise = ()=> {
// //     const merchList = useSelector((state) => state.allProducts.merchandise);
// //     const {brand, product} = merchList;
// //     return(
// //         <div className='container'>
// //             <div className='brand'>{brand}</div>
// //             <div className='image'></div>
// //             <div className='product'>{product}</div>   
// //         </div>
       
// //     )

// // }
