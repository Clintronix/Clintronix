import React, { Component } from "react";
import "./Main.css";
import "./script";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

//pages
import Home from './Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';


class Main extends Component {
    render() {
      return (
          
        <HashRouter>
        <div className="Nav">
            <nav id="nav">
            <button id="btn">=</button>
              <ul>
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/Projects">Projects</NavLink></li>
                  <li><NavLink to="/About">About</NavLink></li>
                  <li><NavLink to="/Contact">Contact</NavLink></li>
                  
              </ul>
            </nav>
        </div>
        {/* displays hearts */}
        <div id="hearts"></div>
          <div>
            <div className="content" > 
                <Route exact path="/" component={ Home }></Route>
                <Route exact path="/Projects" component={ Projects }></Route>
                <Route exact path="/About" component={ About }></Route>
                <Route exact path="/Contact" component={ Contact }></Route>
                
            </div>
           
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;