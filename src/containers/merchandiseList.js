import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMerch} from '../redux/actions/index.js'
import Merchandise from "./merchandise";
import Search from '../components/search.js';

class MerchandiseList extends Component {
    state = {
        term:""
    }

    searchMerch = (term) => {
        this.setState({
            term: term
        })
    }

    filterMerch =() => {
         if (this.state.term !== ""){
            let searchInputLowerCase = this.state.term.toLowerCase()
            let filteredMerch = this.props.stateOfMerch.filter( merch => merch.product.toLowerCase().includes(searchInputLowerCase))
             return filteredMerch
         } else {
             return this.props.stateOfMerch
         }
    }
    
    componentDidMount()
    { 
        this.props.fetchMerch()
    }


    render(){ console.log(this.props)
         //const allMerch = this.filterMerch().map( (product) =>{ return <Merchandise key={product.id} {...product}/>})
            console.log(this.props.stateOfMerch)
           
        return ( 
           
            <div>
            
                <Search searchTermToProp={this.state.term} search={this.searchMerch}/>
                <div class="container-fluid mb-4">
                    <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 d-flex align-items-stretch">
                        {this.filterMerch().map( (product) =>{ return <Merchandise key={product.id} {...product}/>})}
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{  
    return {
        stateOfMerch: state.allProducts
    }
}
 
export default connect(mapStateToProps, {fetchMerch} )(MerchandiseList);
