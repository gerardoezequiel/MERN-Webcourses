import express from 'express';

import { ListAllTeachers } from '../controllers/teacher.js';

const teacherRouter = express.Router();

teacherRouter.get('/teacher', ListAllTeachers);

export default teacherRouter;
