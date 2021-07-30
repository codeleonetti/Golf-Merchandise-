import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCompany} from '../redux/actions/index'
import { NavLink } from 'react-router-dom';
// need to import our action set products 


class Company extends Component {
    componentDidMount(){ 
        this.props.fetchCompany()
    }
    
    render(){
       const allCompanies = this.props.stateOfCompany.map( (company) =>{ return (<div className="companyImage">
        <NavLink to={`/company/${company.id}/merchandises`}><img src={company.image}/></NavLink> 
       </div>)})
      
       
       console.log(this.props.stateOfCompany)
        return(
            
            <div className="companies marginable">
                <div class="container-fluid mb-4">
                    <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {allCompanies}
                    </div>
                </div>
            </div>      
           
        )
    }
    
}
    
    const mapStateToProps =(state)=>{
         console.log(state)
        return{
            stateOfCompany: state.companyReducer.company
        }
    }
     
    export default connect(mapStateToProps,{fetchCompany})(Company);
    


