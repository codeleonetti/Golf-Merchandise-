import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCompanyMerch} from '../redux/actions/index'
import Merchandise from './merchandise';


class CompanyMerchandise extends Component{
    componentDidMount(){
        this.props.fetchCompanyMerch(parseInt(this.props.match.params.company_id))
    }

     render(){console.log()
        const companyMerch = this.props.stateOfCompanyMerch.map( (product) =>{ return <Merchandise key={product.id} p={product}/>})
       

        return(
            <div>
            
            {companyMerch}
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