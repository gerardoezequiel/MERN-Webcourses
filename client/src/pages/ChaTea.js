import React, { useState, useEffect } from 'react';
import { changeTeacher, getTeacher, EliProfe } from '../lib/links.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ChaTea = () => {
  const { _id } = useParams();
  const [nom, setNom] = useState('');
  const [git, setGit] = useState('');
  const [ema, setEma] = useState('');
  const [emp, setEmp] = useState('');
  const [des, setDes] = useState('');

  const fetchProfe = async (_id) => {
    const datos = await getTeacher(_id);
    setNom(datos.teacher);
    setGit(datos.github);
    setEma(datos.email);
    setEmp(datos.company);
    setDes(datos.description);
  };

  useEffect(() => {
    fetchProfe(_id);
  }, [_id]);

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

  const modificaprofe = () => {
    const profi = {
      teacher: nom,
      github: git,
      email: ema,
      company: emp,
      description: des,
    };
    changeTeacher(profi, _id);
    alert('El profesor ha sido modificado correctamente');
  };

  const eliminaprofe = () => {
    EliProfe(_id);
    alert('¡El profesor ha sido eliminado con éxito!');
  };

  return (
    <main className="edit-profe">
      <h2>Modificar los datos del profesor</h2>

      <form>

        <div>
        <label className="Label">Nombre:</label>
        <input
          type="text"
          name="teacher"
          id="teacher"
          value={nom}
          onChange={ajuNom}
          />
        </div>

        <div>
        <label>Github:</label>
        <input
          type="text"
          name="github"
          id="github"
          value={git}
          onChange={ajuGit}
          />
        </div>

        <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={ema}
          onChange={ajuEma}
          />
        </div>

        <div>
        <label>Empresa:</label>
        <input
          type="text"
          name="company"
          id="company"
          value={emp}
          onChange={ajuEmp}
          />
        </div>
        
        <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          id="description"
          value={des}
          onChange={ajuDes}
          ></textarea>
          
        </div>
        
        <div className="profe-action">
          <button
            className="btn btn-edit"
            type="button"
            onClick={modificaprofe}
          >Guardar</button>
          
          <button
            className="btn btn-delete"
            type="button"
            onClick={eliminaprofe}
          >
            <Link to="/profesor">Eliminar</Link>
          </button>
        </div>
      </form>
    </main>
  );
};

export default ChaTea;
