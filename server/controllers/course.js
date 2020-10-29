import {
  getAllCourse,
  getCourseResourceById,
  createCourseResource,
  updateCourseResource,
  deleteCourseResource,
} from '../models/course.js';

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

// From the URL GET /course/:id
export const getCourseById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Called a function that is declared in the resource model
  const courseResource = await getCourseResourceById(id);

  // If we have a course resource
  if (courseResource) {
    // we return resource and 200 OK status
    return response.status(200).send(courseResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: Course resource not found.',
    });
  }
};

// POST /course with JSON payload in the body
export const createCourse = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)

  const { body } = request;

  try {
    // Called a function that is declared in the resource model
    const newCourseResource = await createCourseResource(body);
    return response.status(201).send(newCourseResource);
  } catch (error) {
    // Because Databases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /course/:id
export const updateCourseById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Called a function that is declared in the resource model
    const courseResource = await updateCourseResource(id, body);
    return response.status(200).send(courseResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /course/:id
export const deleteCourseById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteCourseResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
