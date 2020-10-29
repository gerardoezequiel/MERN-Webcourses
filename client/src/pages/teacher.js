import React, { useEffect, useState } from 'react';
import { getAllTeachers } from '../../lib/links.js';

const Teachers = () => {
  const [profeData, setProfeData] = useState([]);

  const fetchAllProfes = async () => {
    const data = await getAllTeachers();
    console.log({ data });
    setProfeData(data);
  };

  useEffect(() => {
    fetchAllProfes();
  }, []);

  return (
    <main>
      <h2>Lista Profesores</h2>

      <ul>
        {profeData.map((item, i) => {
          return (
            <li key={i}>
              <h3>{item.teacher}</h3>
              <p>{item.github}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Teachers;
