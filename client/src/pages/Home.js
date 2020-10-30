import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>¿Quieres aprender programación web, pero no sabes como empezar?</h1>
      <p>¡Aprende a programar con nuestros cursos!</p>
      <p>Tenemos cursos para aprender sobre HTML, CSS, y Javascript.</p>
      <button onClick="#"><Link to="/curso">Lista de Cursos</Link></button>
    </main>
  );
};

export default Home;
