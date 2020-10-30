const { REACT_APP_SERVER_URL } = process.env;

export const getAllTeachers = async () => {
  const response = await fetch(REACT_APP_SERVER_URL + '/teacher');
  return await response.json();
};

export const getAllCourses = async () => {
  const response = await fetch(REACT_APP_SERVER_URL + '/course');
  return await response.json();
};