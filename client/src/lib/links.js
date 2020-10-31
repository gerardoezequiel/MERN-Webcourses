const { REACT_APP_SERVER_URL } = process.env;

export const getAllTeachers = async () => {
  const response = await fetch(REACT_APP_SERVER_URL + '/teacher');
  return await response.json();
};

export const createNewTeacher = async (profe, response) => {
  await fetch('/teacher', {
    method: 'POST',
    body: JSON.stringify(profe),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};

export const getAllCourses = async () => {
  const response = await fetch(REACT_APP_SERVER_URL + '/course');
  return await response.json();
};
