import React, { useState } from 'react';
import { createNewCourse } from '../lib/links.js';

const FormCourse = () => {
  const [fot, setFot] = useState('');
  const [nom, setNom] = useState('');
  const [cat, setCat] = useState(0);
  const [des, setDes] = useState('');
  const [dur, setDur] = useState('');
  const [url, setUrl] = useState('');
  const [pro, setPro] = useState('');

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

  const introducecurso = () => {
    const cursa = {
      picture: fot,
      coursename: nom,
      category: cat,
      description: des,
      duration: dur,
      urlcourse: url,
      teacher: pro,
    };
    createNewCourse(cursa);
    alert('¡El curso ' + nom + ' ha sido creado correctamente!');
  };

  return (
    <main>
      <h2>Introduzca el nuevo curso</h2>

      <form>
        <label>URL de la Foto:</label>
        <input type="text" name="picture" id="picture" onChange={ajuFot} />
        <label>Nombre:</label>
        <input
          type="text"
          name="coursename"
          id="coursename"
          onChange={ajuNom}
        />
        <label>Categoría</label>
        <select name="category" id="category" onChange={ajuCat}>
          <option value="1">HTML</option>
          <option value="2">CSS</option>
          <option value="3">JavaScript</option>
        </select>
        <label>Descripción:</label>
        <textarea
          name="description"
          id="description"
          onChange={ajuDes}
        ></textarea>
        <label>Duración:</label>
        <input type="text" name="duration" id="duration" onChange={ajuDur} />
        <label>Dirección web:</label>
        <input type="url" name="urlcourse" id="urlcourse" onChange={ajuUrl} />
        <label>Profesor:</label>
        <input type="text" name="teacher" id="teacher" onChange={ajuPro} />
        <button type="button" onClick={introducecurso}>
          Crear Curso
        </button>
      </form>
    </main>
  );
};

export default FormCourse;
