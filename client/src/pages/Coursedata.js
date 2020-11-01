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
    <main>
      <h2>Curso {coursename}:</h2>
      <p>Categoria: {valor[category]}</p>
      <p>Duración: {duration}</p>
      <p>Sitio web: {urlcourse}</p>
      <p>Profesor: {teacher}</p>
      <h3>Descripción del curso:</h3>
      <p>{description}</p>
      <button type="button">
        <Link to={'/cursomodificar/' + _id}>Modificar Curso</Link>
      </button>
    </main>
  );
};

export default Coursedata;
