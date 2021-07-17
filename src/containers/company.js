import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCompany} from '../redux/actions/index'
// need to import our action set products 
import Merchandise from "./merchandise";

class Company extends Component {
    componentDidMount(){ 
        this.props.fetchCompany()
    }
    
    render(){
        const allMerch = this.props.stateOfCompany.map( (product) =>{ return <Merchandise key={product.id} p={product}/>})
       console.log(this.props.stateOfMerch)
        return(
            <div>
                {allMerch}
            </div>
        )
    }
    
    }
    
    const mapStateToProps =(state)=>{
        // console.log(state)
        return{
            stateOfCompany: state.allProducts.company
        }
    }
     
    export default connect(mapStateToProps,{fetchCompany})(Company);
    


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