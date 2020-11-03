import React from 'react';
import { Link } from 'react-router-dom'
import coding from 'client/src/img/coding_.png';

const Home = () => {
  return (
    <main>
      <div className="Wrap">
        <article className="Cover">
          <h2 className="Titulo">
            ¿Quieres aprender programación web
            <br /> pero no sabes como empezar?
          </h2>
          <p className="Tag">
            {' '}
            ¡Aprende a programar con nuestros cursos!
            <br />
            Tenemos cursos para aprender sobre HTML, CSS, y Javascript.
          </p>

          <button className="VcButton" onClick="#">
            <Link to="/curso">Lista de Cursos</Link>
          </button>
        </article>
        <article className="C-Portada">
          <img className="Portada" src={coding} alt="Coding" />
        </article>
      </div>
    </main>
  );
};

export default Home;
