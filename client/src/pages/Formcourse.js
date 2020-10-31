import React from 'react';

const FormCourse = () => {
  return (
    <main>
      <h2>Introduzca el nuevo curso</h2>

      <form>
        <label>URL de la Foto:</label>
        <input type="text" name="imagen" />
        <label>Nombre:</label>
        <input type="text" name="coursename" id="coursename" />
        <label>Categoría</label>
        <select name="category">
          <option value="1">HTML</option>
          <option value="2">CSS</option>
          <option value="3">JavaScript</option>
        </select>
        <label>Descripción:</label>
        <textarea name="description" id="artist"></textarea>
        <label>Duración:</label>
        <input type="text" name="duration" id="title" />
        <label>Dirección web:</label>
        <input type="url" name="urlcourse" id="title" />
        <label>Profesor:</label>
        <input type="text" name="teacher" id="title" />
        <button type="submit">Crear</button>
      </form>
    </main>
  );
};

export default FormCourse;
