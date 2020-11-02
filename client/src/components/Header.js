import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="brand" to="/">
        <h1 className="header">Coursify</h1>
        <p> Courses IT yourself</p>
      </Link>
      <nav className="Menu">
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
