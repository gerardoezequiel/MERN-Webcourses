import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <article className= "Cover">
        <h2>¿Quieres aprender programación web, pero no sabes como empezar?</h2>
        <p className="Tag"> ¡Aprende a programar con nuestros cursos!
        Tenemos cursos para aprender sobre HTML, CSS, y Javascript.</p>

        <button className="VcButton" onClick="#">
          <Link to="/curso">Lista de Cursos</Link>
        </button>
      </article>
    </main>
  );
};

export default Home;
