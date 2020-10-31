import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse } from '../lib/links.js';

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

  const valor = ['HTML', 'CSS', 'JavaScript'];
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
      <p>Sition web: {urlcourse}</p>
      <p>Profesor: {teacher}</p>
      <h3>Descripción del curso:</h3>
      <p>{description}</p>
    </main>
  );
};

export default Coursedata;
