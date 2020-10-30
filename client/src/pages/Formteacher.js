import React from 'react';

const FormTeacher = () => {
  return (
    <main>
      <h2>New</h2>

      <form>
        <label>Nombre:</label>
        <input type="text" name="title" id="title" />
        <label>Github:</label>
        <input type="text" name="artist" id="artist" />
        <label>Email:</label>
        <input type="text" name="title" id="title" />
        <label>Empresa:</label>
        <input type="text" name="title" id="title" />
        <label>Descripción:</label>
        <textarea name="title" id="title"></textarea>
        <button type="submit">Crear</button>
      </form>
    </main>
  );
};

export default FormTeacher;
