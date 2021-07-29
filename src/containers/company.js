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