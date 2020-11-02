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
    <main className="crear-curso">
      <h3>Introduzca el nuevo curso</h3>

      <form>
        <div>
          <label className="Label">Foto:</label>
          <input type="text" name="picture" id="picture" onChange={ajuFot} />
        </div>
        <div>
          <label className="Label">Nombre:</label>
          <input
            type="text"
            name="coursename"
            id="coursename"
            onChange={ajuNom}
          />
        </div>
        <div>
          <label className="Label">Categoría</label>
          <select
            className="Select"
            name="category"
            id="category"
            onChange={ajuCat}
          >
            <option value="0">HTML</option>
            <option value="1">CSS</option>
            <option value="2">JavaScript</option>
          </select>
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            id="description"
            onChange={ajuDes}
          ></textarea>
        </div>
        <div>
          <label>Duración:</label>
          <input type="text" name="duration" id="duration" onChange={ajuDur} />
        </div>
        <div>
          <label>Dirección web:</label>
          <input type="url" name="urlcourse" id="urlcourse" onChange={ajuUrl} />
        </div>
        <div>
          <label>Profesor:</label>
          <input type="text" name="teacher" id="teacher" onChange={ajuPro} />
        </div>
        <button type="button" onClick={introducecurso}>
          Crear Curso
        </button>
      </form>
    </main>
  );
};

export default FormCourse;
