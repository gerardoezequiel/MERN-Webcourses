// TODO:
// Sugerencia borrar

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemon from 'nodemon';
import winston from 'winston';
import mongoose from 'mongoose';
import { Teacher } from './data/teachers.js';
import { Course } from './data/courses.js';

const app = express();
const HOST = 'localhost';
const PORT = 4000;
export const databaseURI = 'mongodb://localhost/mongoose-intro';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(databaseURI);

//const categorias = ['HTML', 'CSS', 'JavaScript'];

// Dirección web base. Se limita a mostrar la lista de profesores.
app.get('/profe', (req, res) => {
  let texto = '<h1>Lista de usuarios</h1>';
  console.log('Prueba correcta');
  if (profesores.length > 0) {
    profesores.forEach((element) => {
      texto += '<p>' + element.saludar() + '</p>';
    });
  } else texto += '<h2>Esta lista esta vacia</h2>';
  res.send(texto);
});

// El usuario puede introducir aquí los datos del nuevo profesor.
app.post('/profe', (req, res) => {
  profesores.push(
    new Teacher(
      req.body.teacher,
      req.body.github,
      req.body.email,
      req.body.company,
      req.body.description,
    ),
  );
  res.send('¡Usuario introducido con exito!');
});

// Modificaremos aun profesor ya introducido.
app.put('/profe/:id', (req, res) => {
  if (profesores.length > 0) {
    profesores[req.params.id] = new Teacher(
      req.body.teacher,
      req.body.github,
      req.body.email,
      req.body.company,
      req.body.description,
    );
    res.send('¡El último usuario introducido ha sido modificado!');
  } else res.send('¡No hay ningún usuario en la lista!');
});

// Quitamos un profesor de la lista.
app.delete('/profe/:id', (req, res) => {
  profesores.splice(req.params.id, 1);
  res.send('Profesor eliminado correctamente!');
});

const curso = [
  new Course(
    'java.jpg',
    'Clases de Javascript',
    2,
    'Aprenda Javascript con nosotros',
    '2 semanas',
    'aprendejava.es',
    'Jose Mota',
  ),
];

// Lista de cursos.

app.get('/curso', (req, res) => {
  let texto = '<h1>Lista de cursos</h1>';
  if (curso.length > 0) {
    curso.forEach((element) => {
      texto += '<p>' + element.categorizar() + '</p>';
    });
  } else texto += '<h2>Esta lista esta vacia</h2>';
  res.send(texto);
});

// El usuario puede introducir aquí los datos de un curso nuevo
app.post('/curso', (req, res) => {
  curso.push(
    new Course(
      req.body.picture,
      req.body.coursename,
      req.body.category,
      req.body.description,
      req.body.duration,
      req.body.urlcourse,
      req.body.teacher,
    ),
  );
  res.send('¡Curso introducido con exito!');
});

// Modificaremos aun curso ya introducido.
app.put('/curso/:id', (req, res) => {
  if (curso.length > 0) {
    curso[req.params.id] = new Course(
      req.body.picture,
      req.body.coursename,
      req.body.category,
      req.body.description,
      req.body.duration,
      req.body.urlcourse,
      req.body.teacher,
    );
    res.send('¡El último curso introducido ha sido modificado!');
  } else res.send('¡No hay ningún curso en la lista!');
});

// Quitamos un curso de la lista.
app.delete('/curso/:id', (req, res) => {
  curso.splice(req.params.id, 1);
  res.send('Curso eliminado correctamente!');
});

// Por si se produce un error.
app.get('*', (req, res) => {
  res.end('¡Error 404!');
});

// Iniciamos la página web en localhost.
app.listen(PORT, () =>
  console.log('El servidor se ha iniciado en el puerto ' + PORT),
);
