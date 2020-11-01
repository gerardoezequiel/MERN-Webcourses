import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//UI components
import Header from './Header.js';
import Footer from './Footer.js';

//pages
import Home from '../pages/Home.js';
import Teachers from '../pages/teacher.js';
import Courses from '../pages/course.js';
import Coursedata from '../pages/Coursedata.js';
import FormCourse from '../pages/Formcourse.js';
import FormTeacher from '../pages/Formteacher.js';
import About from '../pages/About.js';
import ChaCou from '../pages/ChaCou.js';
import ChaTea from '../pages/ChaTea.js';
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
            <Route path="/cursodata/:_id" component={Coursedata} />
            <Route path="/crearcurso" component={FormCourse} />
            <Route path="/crearprofesor" component={FormTeacher} />
            <Route path="/about" component={About} />
            <Route path="/cursomodificar/:_id" component={ChaCou} />
            <Route path="/profemodificar/:_id" component={ChaTea} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
