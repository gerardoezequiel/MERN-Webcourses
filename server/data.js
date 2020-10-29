// Profesor
export class Teacher {
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

// Curso
export class Course {
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