
import './App.css';
import Header from './components/header';
import {NavBar} from './components/navBar';
import AboutUs from './components/aboutus';
import MerchandiseList from "./containers/merchandiseList";
import Company from "./containers/company.js";
import CompanyMerchandise from './containers/companyMerchandise';
import Footer from "./components/footer.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() { 
  
  return (
    <div className="background">
      
        <Router>
          <Header/>
          <NavBar/>
            <Switch>
              <Route path='/' exact component={Company}/>
              <Route path='/merchandiselist' exact component={MerchandiseList}/>
              <Route path='/components/aboutus' exact component={AboutUs}/>
              <Route path='/company/:company_id/merchandises' exact component={CompanyMerchandise}/>
              <Route> 404 Not Found!</Route>
            </Switch>
          <Footer/>
        </Router>
     
    </div>
  );
}

export default App;


