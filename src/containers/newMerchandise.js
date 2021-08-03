
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
        onChangeHandler = e => {this.setState({[e.target.name]: e.target.value}); console.log([e.target.name], e.target.value)}
    handleSubmit = e => {e.preventDefault(); this.props.addNewProducts(this.state); /*this.props.history.push('/merchandiselist')*/
                this.setState({
                    product:'',
                    category:'',
                    image:'',
                    price:'',
                    company_id:'' 
                })                    
    }
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
                    {/* <select type='text'
                    placeholder="company.id" */}
                    <select value={this.state.company_id}
                    onChange={this.onChangeHandler}
                    name="company_id">
                    
                      {/* class="form-select form-select-sm" aria-label=".form-select-sm example"> */}
                        <option selected> Select A Company</option>
                        <option value= {parseInt("1")}>Titleist</option>
                        <option value={parseInt("2")}>Callaway</option>
                        <option value={parseInt("3")}>TaylorMade</option>
                        <option value={parseInt("4")}>Mizuno</option>
                        <option value={parseInt("5")}>Cobra</option>
                        <option value={parseInt("6")}>Ping</option>
                        <option value={parseInt("7")}>Odyssey</option>
                        <option value={parseInt("8")}>Cleveland</option>
                        <option value={parseInt("9")}>Ben Hogan</option>
                        <option value={parseInt("10")}>Srixon</option>
                        <option value={parseInt("11")}>PXG</option>
                        <option value={parseInt("12")}>Nike</option>
                        <option value={parseInt("13")}>Puma</option>
                        <option value={parseInt("14")}>Under Armour</option>
                        <option value={parseInt("15")}>Foot Joy</option>
                    </select>
                    <br></br>
                    <input type='submit' value='submit'/>
                </form>
            </div>
         );
    }
}
 
export default connect(null, {addNewProducts})(NewMerch);
