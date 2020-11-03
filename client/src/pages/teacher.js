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
      <button className="btn" type="button">
        <Link to="/crearprofesor">Crear un nuevo Profesor</Link>
      </button>
      <br />
      <h2>Lista Profesores</h2>
      <ul>
        {profeData.map((teacher, i) => {
          return (
            <li key={i}>
              <h3>{teacher.teacher}</h3>
              <h3>Descripción:</h3>
              <p>{teacher.description}</p>
              <h3>Empresa:</h3>
              <p>{teacher.company}</p>
              <h3>Github:</h3>
              <p>{teacher.github}</p>
              <h3>E-mail:</h3>
              <p>{teacher.email}</p>
              <button class="btn" type="button">
                <Link to={'/profemodificar/' + teacher._id}>
                  Editar
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
