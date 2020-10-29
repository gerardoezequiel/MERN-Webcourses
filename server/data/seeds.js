import mongoose from 'mongoose';
import Teacher from '../models/teacher.js';
import teachers from './teacher.js';
import { databaseURI } from '../index.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  teachers.map(async (teacher) => {
    const teacherResource = await Teacher.create({ ...teacher });
    console.log(
      `The resource ${JSON.stringify(teacherResource)} has been created`,
    );
  }),
);
