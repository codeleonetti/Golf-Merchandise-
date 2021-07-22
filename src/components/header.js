
import React from 'react';


const Header = () => {
     return( 
        
        <div className="header">
         <h1 className='headertag'>On The Green</h1>
         <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" class="img-fluid" alt="..." />
        </div>
        
        
        
        );}
    



export default Header;

// to right out your Header from scratch in JS 
// static headerComponent =()=>{
//     return `
//         <h1> Make  your Header Tag </h1>
//     `
// }
// static renderHeader =()=>{
    
//     const newHeader = document.createElement("h1")

//         // 
//         newHeader.innerHTML = this.headerComponent()
//     const anotherHeader = document.querySelector(".classheadertag")
//         anotherHeader.append(newHeader)
// }