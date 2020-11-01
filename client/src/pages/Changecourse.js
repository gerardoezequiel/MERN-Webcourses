import React, { useState, useEffect } from 'react';
import { ModiCourse } from '../lib/links.js';
import { useParams } from 'react-router-dom';
import { getCourse } from '../lib/links.js';

const ChangeCourse = () => {
  const [fot, setFot] = useState('');
  const [nom, setNom] = useState('');
  const [cat, setCat] = useState(0);
  const [des, setDes] = useState('');
  const [dur, setDur] = useState('');
  const [url, setUrl] = useState('');
  const [pro, setPro] = useState('');

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
    picture,
    coursename,
    category,
    description,
    duration,
    urlcourse,
    teacher,
  } = curso;

  const ajuFot = (event) => {
    setFot(event.currentTarget.value);
  };
  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };
  const ajuCat = (event) => {
    setCat(event.currentTarget.value);
  };
  const ajuDes = (event) => {
    setDes(event.currentTarget.value);
  };
  const ajuDur = (event) => {
    setDur(event.currentTarget.value);
  };
  const ajuUrl = (event) => {
    setUrl(event.currentTarget.value);
  };
  const ajuPro = (event) => {
    setPro(event.currentTarget.value);
  };

  const modificacurso = () => {
    const cursa = {
      picture: fot,
      coursename: nom,
      category: cat,
      description: des,
      duration: dur,
      urlcourse: url,
      teacher: pro,
    };
    ModiCourse(cursa, _id);
    alert('¡El curso ' + nom + ' ha sido modificado correctamente!');
  };

  return (
    <main>
      <h2>Introduzca el nuevo curso</h2>

      <form>
        <label>Foto:</label>
        <input
          type="text"
          name="picture"
          id="picture"
          value={picture}
          onChange={ajuFot}
        />
        <label>Nombre:</label>
        <input
          type="text"
          name="coursename"
          id="coursename"
          value={coursename}
          onChange={ajuNom}
        />
        <label>Categoría</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={ajuCat}
        >
          <option value="0">HTML</option>
          <option value="1">CSS</option>
          <option value="2">JavaScript</option>
        </select>
        <label>Descripción:</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={ajuDes}
        ></textarea>
        <label>Duración:</label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={duration}
          onChange={ajuDur}
        />
        <label>Dirección web:</label>
        <input
          type="url"
          name="urlcourse"
          id="urlcourse"
          value={urlcourse}
          onChange={ajuUrl}
        />
        <label>Profesor:</label>
        <input
          type="text"
          name="teacher"
          id="teacher"
          value={teacher}
          onChange={ajuPro}
        />
        <button type="button" onClick={modificacurso}>
          Modificar Curso
        </button>
      </form>
    </main>
  );
};

export default ChangeCourse;
