import React from 'react';
import dani from 'client/src/img/dani.png';
import gera from 'client/src/img/gerardo.png';
import mariano from 'client/src/img/mariano.png';
import about_us from 'client/src/img/about_us.svg';


const About = () => {
  return (
    <div>
      <div className="Wrapper-flex">
        <div className="Wrapper">
          <h3>Miembros del equipo:</h3>
          <article>
            <img src={dani} alt="Daniel Pareja" />
            <div className="Author">
              <h4>Daniel Pareja:</h4>
              <p>La mente lógica del equipo</p>
              <p>IS</p>
            </div>
          </article>

          <article>
            <img src={gera} alt="Gerardo Ezequiel" />
            <div className="Author">
              <h4>Gerardo Ezequiel:</h4>
              <p>El planificador, aunque no le hagan caso</p>
              <p>CTO</p>
            </div>
          </article>

          <article>
            <img src={mariano} alt="Mariano Cuesta" />
            <div className="Author">
              <h4>Mariano Cuesta:</h4>
              <p>"Dejadme a mi el CSS"</p>
              <p>CMO</p>
            </div>
          </article>
        </div>
    
        <img className ="Pic" src={about_us} alt="Sobre nosotros" />
  
      </div>
    </div>
  );
};

export default About;
