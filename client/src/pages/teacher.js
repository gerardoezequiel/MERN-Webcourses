import React, { useEffect, useState } from 'react';
import { getAllTeachers } from '../lib/links.js';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const [profeData, setProfeData] = useState([]);

  const fetchAllProfes = async () => {
    const data = await getAllTeachers();
    setProfeData(data);
  };

  useEffect(() => {
    fetchAllProfes();
  }, []);

  return (
    <main>
      <button type="button">
        <Link to="/crearprofesor">Crear un nuevo Profesor</Link>
      </button>
      <br />
      <h2>Lista Profesores</h2>
      <ul>
        {profeData.map((teacher, i) => {
          return (
            <li key={i}>
              <h1>{teacher.teacher}</h1>
              <h2>Descripción:</h2>
              <h3>{teacher.description}</h3>
              <h2>Empresa:</h2>
              <h3>{teacher.company}</h3>
              <h2>Github:</h2>
              <h3>{teacher.github}</h3>
              <h2>E-mail:</h2>
              <h3>{teacher.email}</h3>
              <button type="button">
                <Link to={'/profemodificar/' + teacher._id}>
                  Modificar Profesor
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Teachers;
