import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Cursos Online</h1>
      <nav id="menu">
        <ul>
          <li>
            <Link to="/profesor">Lista de Profesores</Link>
          </li>
          <li>
            <Link to="/curso">Lista de Cursos</Link>
            <ul>
              <li>
                <Link to="/cursofiltro/0">HTML</Link>
              </li>
              <li>
                <Link to="/cursofiltro/1">CSS</Link>
              </li>
              <li>
                <Link to="/cursofiltro/2">JavaScript</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">Creditos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
