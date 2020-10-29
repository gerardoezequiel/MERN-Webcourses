import express from 'express';
import { ListAllCourses } from '../controllers/course.js';

const courseRouter = express.Router();

courseRouter.get('/course', ListAllCourses);

export default courseRouter;
