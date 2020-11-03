import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse, valor } from '../lib/links.js';
import { Link } from 'react-router-dom';

const Coursedata = () => {
  const { _id } = useParams();
  const [curso, setCurso] = useState({});

  const fetchCurso = async (_id) => {
    const datos = await getCourse(_id);
    setCurso(datos);
  };

  useEffect(() => {
    fetchCurso(_id);
  }, [_id]);

  const {
    coursename,
    category,
    description,
    duration,
    urlcourse,
    teacher,
  } = curso;
  return (
    <main className="Wrapper-flex">
      <article className="Wrapper">
      <h3>Curso {coursename}:</h3>
      <p>Categoria: {valor[category]}</p>
      <p>Duración: {duration}</p>
      <p>Sitio web: {urlcourse}</p>
      <p>Profesor: {teacher}</p>
      <h3>Descripción del curso:</h3>
      <p>{description}</p>
      </article>
      
      <div>
        <button className="btn btn-edit" type="button">
          <Link to={'/cursomodificar/' + _id}>Modificar</Link>
        </button>
      </div>
      <div className="course-action">
        <button className="btn btn-edit" type="button">
          <Link to={'/curso'}>Eliminar</Link>
        </button>
      </div>
    </main>
  );
};

export default Coursedata;
