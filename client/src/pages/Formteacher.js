import React, { useState } from 'react';
import { createNewTeacher } from '../lib/links.js';

const FormTeacher = () => {
  const [nom, setNom] = useState('');
  const [git = '', setGit] = useState('');
  const [ema = '', setEma] = useState('');
  const [emp = '', setEmp] = useState('');
  const [des = '', setDes] = useState('');

  const ajuNom = (event) => {
    setNom(event.currentTarget.value);
  };
  const ajuGit = (event) => {
    setGit(event.currentTarget.value);
  };
  const ajuEma = (event) => {
    setEma(event.currentTarget.value);
  };
  const ajuEmp = (event) => {
    setEmp(event.currentTarget.value);
  };
  const ajuDes = (event) => {
    setDes(event.currentTarget.value);
  };

  const introduceprofe = () => {
    const profi = {
      teacher: nom,
      github: git,
      email: ema,
      company: emp,
      description: des,
    };
    createNewTeacher(profi);
    alert('¡El profesor ' + nom + ' ha sido creado correctamente!');
  };

  return (
    <main className="crear-profe">
      <h2>Introduzca los datos del nuevo profesor</h2>

      <form>
        <div>
          <label className="Label">Nombre:</label>
          <input
            type="text"
            name="teacher"
            id="teacher"
            onChange={ajuNom} />
        </div>

        <div>
          <label>Github:</label>
          <input type="text" name="github" id="github" onChange={ajuGit} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" id="email" onChange={ajuEma} />
        </div>

        <div>
          <label>Empresa:</label>
          <input type="text" name="company" id="company" onChange={ajuEmp} />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            id="description"
            onChange={ajuDes}
          ></textarea>
        </div>

        <button className="btn" type="button" onClick={introduceprofe}>
          Crear Profesor
        </button>
      </form>
    </main>
  );
};

export default FormTeacher;
