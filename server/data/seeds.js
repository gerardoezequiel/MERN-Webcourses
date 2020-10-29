import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
// Teacher
import Teacher from '../models/teacher.js';
import teachers from './teacher.js';

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

// Courses
import Course from '../models/course.js';
import courses from './course.js';

Promise.all(
  courses.map(async (course) => {
    const courseResource = await Course.create({ ...course });
    console.log(
      `The resource ${JSON.stringify(courseResource)} has been created`,
    );
  }),
);
