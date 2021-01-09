import logo from './logo.svg';

//Routing
import { Switch, Route } from "react-router-dom"

//Components
import NotFound from "./NotFound/NotFound.js"
import NavBar from "./NavBar/NavBar.js"
import MainPage from "./MainPage/MainPage.js"
import Cuisine from "./Cuisine/Cuisine.js"
import CuisineLanding from "./CuisineLanding/CuisineLanding.js"
import Familiar from "./Familiar/Familiar.js"
import FamiliarLanding from "./FamiliarLanding/FamiliarLanding.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={(routeProps) => <MainPage {...routeProps} />} />
        <Route exact path="/cuisine/" render={(routeProps) => <CuisineLanding {...routeProps} />} />
        <Route exact path="/cuisine/:cuisineType" render={(routeProps) => <Cuisine {...routeProps} />} />
        <Route exact path="/familiar/" render={(routeProps) => <FamiliarLanding {...routeProps} />} />
        <Route exact path="/familiar/:familiarType" render={(routeProps) => <Familiar {...routeProps} />} />
        <Route render={(routeProps) => <NotFound {...routeProps} />} />
      </Switch>
      
    </div>
  );
}

export default App;
