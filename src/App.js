import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DashboardPage from './pages/dashboard.page';
import AddMenuItem from './pages/addMenu.page';
import MenuPage from './pages/menu.page';
import './css/app.scss';



function App() {
  return (
      
        <div className="mainWrapper">
          <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addMenu">
              <AddMenupage />
            </Route>
            <Route path="/viewMenu">
              <ShowMenuPage />
            </Route>
          </Switch>
          </Router>
        </div>
     
    );
  }
  
  function Home() {
    return (
      <div>
        <DashboardPage />
      </div>
    );
  }
  
  function ShowMenuPage() {
    return (
      <div>
        <MenuPage/>
      </div>
    );
  }
  
  function AddMenupage() {
    return (
      <div>
        <AddMenuItem />
      </div>
    );
  }

export default App;
