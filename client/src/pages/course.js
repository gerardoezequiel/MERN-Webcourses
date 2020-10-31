import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../lib/links.js';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [cursoData, setCursoData] = useState([]);

  const fetchAllCursos = async () => {
    const data = await getAllCourses();
    setCursoData(data);
  };

  useEffect(() => {
    fetchAllCursos();
  }, []);

  return (
    <main>
      <h2>Lista Cursos</h2>
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

export default Courses;
