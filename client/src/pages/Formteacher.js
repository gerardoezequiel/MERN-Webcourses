// import React from 'react';
// import { useForm } from 'react-hook-form';
// export default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         placeholder="Name"
//         name="Name"
//         ref={register({ required: true, maxLength: 80 })}
//       />
//       <input
//         type="email"
//         placeholder="e-mail"
//         name="e-mail"
//         ref={register({ required: true, maxLength: 12 })}
//       />
//       <input
//         type="text"
//         placeholder="Office"
//         name="Office"
//         ref={register({ required: true, pattern: /^\S+@\S+$/i })}
//       />
//       <input
//         type="text"
//         placeholder="Company"
//         name="Company"
//         ref={register({ required: true, maxLength: 100 })}
//       />
//       <textarea name="Description" ref={register} />
//       <input type="submit" />
//     </form>
//   );
// }

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
    <main>
      <h2>Introduzca los datos del nuevo profesor</h2>

      <form>
        <label>Nombre:</label>
        <input type="text" name="teacher" id="teacher" onChange={ajuNom} />
        <label>Github:</label>
        <input type="text" name="github" id="github" onChange={ajuGit} />
        <label>Email:</label>
        <input type="email" name="email" id="email" onChange={ajuEma} />
        <label>Empresa:</label>
        <input type="text" name="company" id="company" onChange={ajuEmp} />
        <label>Descripción:</label>
        <textarea
          name="description"
          id="description"
          onChange={ajuDes}
        ></textarea>
        <button type="button" onClick={introduceprofe}>
          Crear Profesor
        </button>
      </form>
    </main>
  );
};

export default FormTeacher;
