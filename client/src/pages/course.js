import React, { useEffect, useState } from 'react';
import { getAllCourses, valor } from '../lib/links.js';
import { Link } from 'react-router-dom';
import Filtro from './Filtro.js';
import Texteo from './Texteo.js';

const Courses = () => {
  const [cursoData, setCursoData] = useState([]);

  const [categoria, setCategoria] = useState(-1);
  const [texto, setTexto] = useState('');

  const fetchAllCursos = async () => {
    const data = await getAllCourses();
    setCursoData(data);
  };

  useEffect(() => {
    fetchAllCursos();
  }, []);

  const restauracion = async (cat, tex) => {
    const respuesta = await getAllCourses();
    if (cat > -1) {
      let u = 0;
      while (u < respuesta.length) {
        if (respuesta[u].category === cat) u++;
        else respuesta.splice(u, 1);
      }
    }

    if (tex !== '') {
      let o = 0;
      while (o < respuesta.length) {
        if (respuesta[o].coursename.toLowerCase().indexOf(tex) === -1)
          respuesta.splice(o, 1);
        else o++;
      }
    }

    setCursoData(respuesta);
  };

  const filtro = (event) => {
    const actual = event.target.value;
    setCategoria(actual);
    restauracion(actual, texto);
  };

  const texta = (event) => {
    const actual = event.target.value.toLowerCase();
    setTexto(actual);
    restauracion(categoria, actual);
  };

  return (
    <main>
      <button className="AddCourse" type="button">
        <Link to="/crearcurso">Crear un nuevo Curso</Link>
      </button>
    
      <Filtro filtro={filtro} />
      <Texteo texta={texta} />
      <div className="Lista">
      <h3>Lista de Cursos:</h3>
      <ul>
        {cursoData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/cursodata/${item._id}`}>
                <h3>
                  <i>{item.coursename}</i>
                </h3>
              </Link>
              <br />
              Duración: {item.duration}
              <br />
              Categoria: {valor[item.category]}
            </li>
          );
        })}
        </ul>
      </div>
    </main>
  );
};

export default Courses;
