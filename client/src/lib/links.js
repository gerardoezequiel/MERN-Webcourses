const { REACT_APP_SERVER_URL } = process.env;

export const valor = ['HTML', 'CSS', 'JavaScript'];

export const getAllTeachers = async () => {
  const response = await fetch(REACT_APP_SERVER_URL + '/teacher');
  return await response.json();
};

export const getTeacher = async (id) => {
  const response = await fetch(REACT_APP_SERVER_URL + '/teacher/' + id);
  return await response.json();
};

export const createNewTeacher = async (profe, response) => {
  await fetch(REACT_APP_SERVER_URL + '/teacher', {
    method: 'POST',
    body: JSON.stringify(profe),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const getAllCourses = async () => {
  const response = await fetch(REACT_APP_SERVER_URL + '/course');
  return await response.json();
};

export const getCourse = async (id) => {
  const response = await fetch(REACT_APP_SERVER_URL + '/course/' + id);
  return await response.json();
};

export const createNewCourse = async (curso, response) => {
  await fetch(REACT_APP_SERVER_URL + '/course', {
    method: 'POST',
    body: JSON.stringify(curso),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const ModiCourse = async (curso, id, response) => {
  await fetch(REACT_APP_SERVER_URL + '/course/' + id, {
    method: 'PUT',
    body: JSON.stringify(curso),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const changeTeacher = async (profe, id, response) => {
  await fetch(REACT_APP_SERVER_URL + '/teacher/' + id, {
    method: 'PUT',
    body: JSON.stringify(profe),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const EliCourse = async (id, response) => {
  await fetch(REACT_APP_SERVER_URL + '/course/' + id, {
    method: 'Delete',
  });
};

export const EliProfe = async (id, response) => {
  await fetch(REACT_APP_SERVER_URL + '/teacher/' + id, {
    method: 'Delete',
  });
};
