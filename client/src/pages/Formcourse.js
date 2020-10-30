import React from 'react';

const FormCourse = () => {
  return (
    <main>
      <h2>New</h2>

      <form>
        <label>Foto:</label>
        <input type="text" name="title" id="title" />
        <label>Nombre:</label>
        <input type="text" name="title" id="title" />
        <label>Categoría</label>
        <select name="select">
          <option value="1">HTML</option>
          <option value="2">CSS</option>
          <option value="3">JavaScript</option>
        </select>
        <label>Descripción:</label>
        <textarea name="artist" id="artist"></textarea>
        <label>Duración:</label>
        <input type="text" name="title" id="title" />
        <label>Dirección web:</label>
        <input type="text" name="title" id="title" />
        <label>Profesor:</label>
        <input type="text" name="title" id="title" />
        <button type="submit">Crear</button>
      </form>
    </main>
  );
};

export default FormCourse;
