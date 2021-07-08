import logo from './logo.svg';
import './App.css';
import Header from './header';
import MerchandiseList from "./merchandiseList"
import Brand from "./brand.js"


// const clubBrands = [
//   'Titleist', 'Callaway', 'TaylorMade', 'Mizuno', 'Cobra', 'Ping', 'Cleveland',
//   'Odyssey', 'Ben Hogan', 'Srixon', 
// ]

function App() { 
  // is where we add all other components
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>jds playing around</h1>
        <h1>Making a Golf Merchandise Store</h1> */}
        
        <Brand/>
        <Header/>
          <h4 className="merchTags">Clubs / Clothes / FootWear</h4>
        <MerchandiseList/>
        
        {console.log("yup im here",Brand)}
          
        
          {/* <ul>
            {Brand.state.allBrands.map(names =>{ return( 
              <div className='brand names'>
              
              <h3>{names}</h3>
              <MerchandiseList/>
              </div>
            )})}
          </ul> */}
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
