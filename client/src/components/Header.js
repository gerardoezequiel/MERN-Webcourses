import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <section class= "H1">
      <Link to="/">
        <h1 section ="header">Coursify</h1>
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
    </section>
  );
};

export default withRouter(Header);
