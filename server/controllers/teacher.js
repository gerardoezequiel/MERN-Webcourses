import { getAllTeacher } from '../models/teacher.js';

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
