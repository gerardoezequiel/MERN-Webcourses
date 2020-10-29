import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


//UI components
import Header from './Header.js';
import Footer from './Footer.js';


//pages
import Home from "../pages/Home.js";
import Teachers from "../pages/teacher.js";
import Courses from "../pages/course.js";
import ErrorPage from '../pages/Error.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profesor" component={Teachers} />
            <Route path="/curso" component={Courses} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;