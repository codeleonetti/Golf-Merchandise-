import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCompanyMerch} from '../redux/actions/index'
import Merchandise from './merchandise';
import Company from './company';

class CompanyMerchandise extends Component{
    componentDidMount(){
        this.props.fetchCompanyMerch(parseInt(this.props.match.params.company_id))
    }

     render(){console.log()
        const companyMerch = this.props.stateOfCompanyMerch.map( (product) =>{ return <Merchandise key={product.id} {...product}/>})
       

        return( 
            <div>
                <div class="container-fluid mb-4">
                    <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {companyMerch}
                    </div>
                </div>
            </div>
        )
    }
}
    const mapStateToProps =(state)=>{
        console.log(state)
       return{
           stateOfCompanyMerch: state.companyMerchReducer.companyMerch
       }
   }

export default connect(mapStateToProps,{fetchCompanyMerch})(CompanyMerchandise)