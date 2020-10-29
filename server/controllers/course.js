import { getAllCourse } from '../models/course.js';

export const ListAllCourses = async (request, response) => {
  try {
    const courses = await getAllCourse();
    return response.status(200).send(courses);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};

// TODO:
// Get course by Id
// Edit course
// Delete course
