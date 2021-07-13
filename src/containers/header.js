import { Component } from "react";

class Header extends Component{
    render(){ return( <h1>On The Green</h1>
        // <h4>Clubs</h4>,
        // <h4>Clothes</h4>,
        // <h4>Footwear</h4>
        
        );}
    


}
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