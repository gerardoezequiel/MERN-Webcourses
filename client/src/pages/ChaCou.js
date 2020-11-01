import React, { useState, useEffect } from 'react';
import { ModiCourse, EliCourse, getCourse } from '../lib/links.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ChaCou = () => {
  const { _id } = useParams();
  const [fot, setFot] = useState('');
  const [nom, setNom] = useState('');
  const [cat, setCat] = useState(0);
  const [des, setDes] = useState('');
  const [dur, setDur] = useState('');
  const [url, setUrl] = useState('');
  const [pro, setPro] = useState('');

  const fetchCurso = async (_id) => {
    const datos = await getCourse(_id);
    setFot(datos.picture);
    setNom(datos.coursename);
    setCat(datos.category);
    setDes(datos.description);
    setDur(datos.duration);
    setUrl(datos.urlcourse);
    setPro(datos.teacher);
  };

  useEffect(() => {
    fetchCurso(_id);
  }, [_id]);

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
    alert('¡El curso ha sido modificado correctamente!');
  };

  const eliminacurso = () => {
    EliCourse(_id);
    alert('¡El curso ha sido eliminado con éxito!');
  };

  return (
    <main>
      <h2>Modifica los datos del curso</h2>

      <form>
        <label>Foto:</label>
        <input
          type="text"
          name="picture"
          id="picture"
          value={fot}
          onChange={ajuFot}
        />
        <label>Nombre:</label>
        <input
          type="text"
          name="coursename"
          id="coursename"
          value={nom}
          onChange={ajuNom}
        />
        <label>Categoría</label>
        <select name="category" id="category" value={cat} onChange={ajuCat}>
          <option value="0">HTML</option>
          <option value="1">CSS</option>
          <option value="2">JavaScript</option>
        </select>
        <label>Descripción:</label>
        <textarea
          name="description"
          id="description"
          value={des}
          onChange={ajuDes}
        ></textarea>
        <label>Duración:</label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={dur}
          onChange={ajuDur}
        />
        <label>Dirección web:</label>
        <input
          type="url"
          name="urlcourse"
          id="urlcourse"
          value={url}
          onChange={ajuUrl}
        />
        <label>Profesor:</label>
        <input
          type="text"
          name="teacher"
          id="teacher"
          value={pro}
          onChange={ajuPro}
        />
        <br />
        <button type="button" onClick={modificacurso}>
          Modificar Curso
        </button>
        <button type="button" onClick={eliminacurso}>
          <Link to="/curso">Eliminar Curso</Link>
        </button>
      </form>
    </main>
  );
};

export default ChaCou;
