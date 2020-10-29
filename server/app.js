import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Profesor
class Teacher {
  constructor(nombre, git, email, com, des) {
    this.teacher = nombre;
    this.github = git;
    this.email = email;
    this.company = com;
    this.description = des;
  }
  saludar() {
    return (
      'Me llamo ' +
      this.teacher +
      ', mi GitHub es ' +
      this.github +
      ' y trabajo para ' +
      this.company
    );
  }
}

const profesores = [];
profesores.push(
  new Teacher(
    'Paco Miraflores',
    'Perejota',
    'paquitochocolatero84@gmail.com',
    'Corporación Umbrella',
    'Soy profesor de Informatica. Tengo certificado universitario de programador web.',
  ),
);

//const categorias = ['HTML', 'CSS', 'JavaScript'];

// Curso
class Course {
  constructor(fot, nom, cat, des, dur, url, tea) {
    this.picture = fot;
    this.coursename = nom;
    this.category = cat;
    this.description = des;
    this.duration = dur;
    this.urlcourse = url;
    this.teacher = tea;
  }
  categorizar() {
    return (
      'Este curso se llama ' +
      this.coursename +
      ', dura ' +
      this.duration +
      ' y lo da ' +
      this.teacher
    );
  }
}

const cursos = [];

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

// Por si se produce un error.
app.get('*', (req, res) => {
  res.end('¡Error 404!');
});

// Iniciamos la página web en localhost.
app.listen(PORT, () =>
  console.log('El servidor se ha iniciado en el puerto ' + PORT),
);
