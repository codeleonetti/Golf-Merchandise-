
import React, {Component}from 'react';
import {addNewProducts} from '../redux/actions/index';
import {connect} from 'react-redux';

class NewMerch extends Component {
   
        constructor(props){
            super(props);
            this.state = {
                product:'',
                category:'',
                image:'',
                price:'',
                company_id:''
            }
           
     }
        onChangeHandler = e => {this.setState({[e.target.name]: e.target.value}); console.log([e.target.name], ': e.target.value')}
        handleSubmit = e => {e.preventDefault(); this.props.addNewProducts(this.state); /*this.props.push('./merchandise')*/}
    render() { 
        return ( 
            <div className= "newForm align-center">
                <form onSubmit={this.handleSubmit}>
                Enter A New Product:
                <br></br>
                    <input type='text'
                    placeholder="Product Name"
                    value={this.state.products}
                    onChange={this.onChangeHandler}
                    name="product"
                    />
                    <br></br>
                    <input type='text'
                    placeholder="Product category"
                    value={this.state.categories}
                    onChange={this.onChangeHandler}
                    name="category"
                    />
                    <br></br>
                    <input type='text'
                    placeholder="Product Image"
                    value={this.state.image}
                    onChange={this.onChangeHandler}
                    name="image"
                    />
                    <br></br>
                    <input type='text'
                    placeholder="Product Price"
                    value={this.state.price}
                    onChange={this.onChangeHandler}
                    name="price"
                    />
                    <br></br>
                    <input type='text'
                    placeholder="company.id"
                    value={this.state.company_id}
                    onChange={this.onChangeHandler}
                    name="company_id"
                    />
                    <br></br>
                    <input type='submit' value='submit'/>
                </form>
            </div>
         );
    }
}
 
export default connect(null, {addNewProducts})(NewMerch);
