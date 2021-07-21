
import './App.css';
import Header from './components/header';
import NavBar from './components/navBar';
import MerchandiseList from "./containers/merchandiseList";
import Company from "./containers/company.js"
import Merchandise from "./containers/merchandise.js"
import CompanyMerchandise from './containers/companyMerchandise';
import Footer from "./components/footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() { 
  // is where we add all other components
  return (
    <div>
        <Router>
          <Header/>
          <NavBar/>
            <Switch>
              <Route path='/' exact component={Company}/>
              <Route path='/merchandiselist' exact component={MerchandiseList}/>
              <Route path='/merchandise' exact component={Merchandise}/>
              <Route path='/merchandise/:productId' exact component={Merchandise}/>
              <Route path='/company/:company_id/merchandises' exact component={CompanyMerchandise}/>
              <Route> 404 Not Found!</Route>
            </Switch>
          <Footer/>  
        </Router>
    </div>
  );
}

export default App;

// const brands = [
//   'Titleist', 'Callaway', 'TaylorMade', 'Mizuno', 'Cobra', 'Ping', 'Cleveland',
//   'Odyssey', 'Ben Hogan', 'Srixon', 
//]


// class App extends Component {
//   state = {  
//     allBrands:[
//         'Titleist', 'Callaway', 'TaylorMade', 'Mizuno', 'Cobra', 'Ping', 'Cleveland',
//         'Odyssey', 'Ben Hogan', 'Srixon', 'PXG', 'Nike', 'Greg Norman', 'Puma', 'Adidas',
//         'Oakley', 'Under Armour', 'Foot Joy', 'Skechers'
//     ] }
//   render() { 
//     const postingBrands=this.state.allBrands.map(brand =>{ return <h3>{brand}</h3>})
    
//     return (
//       <div>
//       <MerchandiseList/> 
//       {postingBrands}
      
//       {/* //  <const postingBrands = {this.state.allBrands.map(brand => { return  <h3>{brand}</h3>}}/> */}
//       {/* // //   <MerchandiseList/>
//       // <postingBrands/> */}
//       </div>
//     )}
//     }
// export default App;
 {/* <ul>
            {Brand.state.allBrands.map(names =>{ return( 
              <div className='brand names'>
              
              <h3>{names}</h3>
              <MerchandiseList/>
              </div>
            )})}
          </ul> */}
