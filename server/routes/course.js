import express from 'express';
import {
  ListAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
} from '../controllers/course.js';

const courseRouter = express.Router();

courseRouter.get('/course', ListAllCourses);
courseRouter.get('/course/:id', getCourseById);
courseRouter.post('/course', createCourse);
courseRouter.put('/course/:id', updateCourseById);
courseRouter.delete('/course/:id', deleteCourseById);

export default courseRouter;
