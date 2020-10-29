import { getAllTeacher,getTeacherResourceById,createTeacherResource,updateTeacherResource,deleteTeacherResource } from '../models/teacher.js';

export const ListAllTeachers = async (request, response) => {
  try {
    const teachers = await getAllTeacher();
    return response.status(200).send(teachers);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const getTeacherById = async (request, response, next) => {
  const {
    params: { id },
  } = request;

  const profesor = await getTeacherResourceById(id);

  if (profesor) return response.status(200).send(profesor);
  else
    return response.status(404).send({
      message: 'Error: Profesor no encontrado.',
    });
};

export const createTeacher = async (request, response) => {
  const { body } = request;
  try {
    const newprofe = await createTeacherResource(body);
    return response.status(201).send(newprofe);
  }
  catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: la conexión a la BBDD ha fallado, ${error}.`,
    });
  }
}

export const updateTeacherById = async (request, response) => {
  const {
    params: { id }, body
  } = request;
  try {
    const profe = await updateMusicResource(id, body);
    return response.status(200).send(profe);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
}

export const deleteTeacherById = async (request, response) => {
  const {
    params: { id },
  } = request;

  try {
    const profeliminado = await deleteTeacherResource(id);
    return response.status(200).send({
      message: profeliminado,
    });
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
}