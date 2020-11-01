import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Coursify</h1>
        <p> Courses IT yourself</p>
      </Link>
      <nav id="menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/curso">Cursos</Link>
          </li>
          <li>
            <Link to="/profesor">Profesores</Link>
          </li>
          <li>
            <Link to="/about">Conócenos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
