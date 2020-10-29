import React, { useEffect, useState } from 'react';
import { getAllTeachers } from '../../lib/links.js';

const Courses = () => {
  const [cursoData, setCursoData] = useState([]);

  const fetchAllCursos = async () => {
    const data = await getAllCourses();
    console.log({ data });
    setCursoData(data);
  };

  useEffect(() => {
    fetchAllCursos();
  }, []);

  return (
    <main>
      <h2>Lista Cursos</h2>

      <ul>
        {cursoData.map((item, i) => {
          return (
            <li key={i}>
              <h3>{item.coursename}</h3>
              <p>{item.duration}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Courses;
