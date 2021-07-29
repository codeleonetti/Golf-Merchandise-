
import './App.css';
import Header from './components/header';
import {NavBar} from './components/navBar';
import AboutUs from './components/aboutus';
import MerchandiseList from "./containers/merchandiseList";
import Company from "./containers/company.js"
import Merchandise from "./containers/merchandise.js"
import CompanyMerchandise from './containers/companyMerchandise';
import Footer from "./components/footer.js"
import {Layout} from "./components/layout"
import Search from "./components/search"
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() { 
  // is where we add all other components
  return (
    <div>
      <Layout>
        <Router>
          <Header/>
          <NavBar/>
          {/* <Search/> */}
            <Switch>
              <Route path='/' exact component={Company}/>
              <Route path='/merchandiselist' exact component={MerchandiseList}/>
              <Route path='/merchandise' exact component={Merchandise}/>
              <Route path='/components/aboutus' exact component={AboutUs}/>
              <Route path='/company/:company_id/merchandises' exact component={CompanyMerchandise}/>
              <Route> 404 Not Found!</Route>
            </Switch>
          <Footer/>
        </Router>
      </Layout>   
    </div>
  );
}

export default App;


