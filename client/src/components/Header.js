import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Cursos Online</h1>
        <nav>
    <ul>
      <li>
        <Link to="/profesor">Lista de Profesores</Link>
      </li>
      <li>
        <Link to="/curso">Lista de Cursos</Link>
      </li>
    </ul>
  </nav>
    </header>
  );
};

export default withRouter(Header);
