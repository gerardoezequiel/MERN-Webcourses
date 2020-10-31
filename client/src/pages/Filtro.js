import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../lib/links.js';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Filtro = () => {
  const vector = ['HTML', 'CSS', 'JavaScript'];
  const { cat } = useParams();
  const [cursoData, setCursoData] = useState([]);

  const fetchCursos = async () => {
    const data = await getAllCourses();
    let u;
    for (u = 0; u < data.length; u++)
      if (cat !== data[u].category) {
        data.splice(u, 1);
        u--;
      }
    setCursoData(data);
  };

  useEffect(() => {
    fetchCursos();
  }, []);

  return (
    <main>
      <Link to="/crearcurso">Crear un nuevo Curso</Link>
      <h2>
        Cursos de {vector[cat]} ({cursoData.length} resultado/s):
      </h2>
      <ul>
        {cursoData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/cursodata/${item._id}`}>
                <i>{item.coursename}</i>
              </Link>
              <br />
              (Duración: {item.duration})
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Filtro;
