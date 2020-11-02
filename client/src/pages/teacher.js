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
              <h4>{teacher.teacher}</h4>
              <h4>Descripción:</h4>
              <h4>{teacher.description}</h4>
              <h4>Empresa:</h4>
              <h4>{teacher.company}</h4>
              <h4>Github:</h4>
              <h4>{teacher.github}</h4>
              <h4>E-mail:</h4>
              <h4>{teacher.email}</h4>
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
