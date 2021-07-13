
import './App.css';
import Header from './containers/components/header';
import MerchandiseList from "./containers/components/merchandiseList"
import Brand from "./containers/components/brand.js"
import Merchandise from "./containers/components/merchandise.js"
import Footer from "./containers/components/footer.js"
import {Switch, Route} from "react-router-dom"
function App() { 
  // is where we add all other components
  return (
    <div>

        <Header/>
        <Switch>
        <Route path="/" component={Brand}/>
        <Merchandise />
        <MerchandiseList/>
        </Switch>
        <Footer/>  
       
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
