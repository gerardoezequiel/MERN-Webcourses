import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from 'client/src/img/logo.png';

const Header = () => {
  return (
    <header>
      <Link className="brand" to="/">
        <h1 className="header">
          <img className="Portada" src={logo} alt="Coursify" />
        </h1>
      </Link>
      <nav className="Menu">
        <ul className="NavMenu">
          <li className="ElementNavMenu">
            <Link to="/">Inicio</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/curso">Cursos</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/profesor">Profesores</Link>
          </li>
          <li className="ElementNavMenu">
            <Link to="/about">Conócenos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
