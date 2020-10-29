import express from 'express';

import {
  ListAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacherById,
  deleteTeacherById,
} from '../controllers/teacher.js';

const teacherRouter = express.Router();

teacherRouter.get('/teacher', ListAllTeachers);
teacherRouter.get('/teacher/:id', getTeacherById);
teacherRouter.post('/teacher', createTeacher);
teacherRouter.put('/teacher/:id', updateTeacherById);
teacherRouter.delete('/teacher/:id', deleteTeacherById);

export default teacherRouter;
