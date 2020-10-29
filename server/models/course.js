import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    picture: String,
    coursename: String,
    category: String,
    description: String,
    duration: String,
    urlcourse: String,
    teacher: String,
  },
  {
    timestamps: true,
  },
);

const Course = mongoose.model('Course', courseSchema);

export const getAllCourse = async () => {
  try {
    return await Course.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getCourseResourceById = async (id) => {
  try {
    return await Course.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createCourseResource = async (data) => {
  try {
    return await Course.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCourseResource = async (id, data) => {
  try {
    return await Course.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCourseResource = async (id) => {
  try {
    return await Course.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Course;
