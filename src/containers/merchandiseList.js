import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMerch} from '../redux/actions/index.js'
import Merchandise from "./merchandise";


class MerchandiseList extends Component {
    
    componentDidMount()
    { 
        this.props.fetchMerch()
    }

    render(){ console.log(this.props)
        const allMerch = this.props.stateOfMerch.map( (product) =>{ return <Merchandise key={product.id} {...product}/>})
            console.log(this.props.stateOfMerch)
        return (  
            <div>
                <div class="container-fluid mb-4">
                    <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 d-flex align-items-stretch">
                        {allMerch}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{  
    return {
        stateOfMerch: state.allProducts.merchandise
    }
}
 
export default connect(mapStateToProps, {fetchMerch} )(MerchandiseList);
