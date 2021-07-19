import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCompanyMerch} from '../redux/actions/index'

class CompanyMerchandise extends Component{
    componentDidMount(){
        this.props.fetchCompanyMerch(parseInt(this.props.match.params.company_id))
    }

     render(){console.log()
        const r = <h1>you found me</h1>

        return(
            <div>
            {r}

            </div>
        )
    }
}

export default connect(null,{fetchCompanyMerch})(CompanyMerchandise)