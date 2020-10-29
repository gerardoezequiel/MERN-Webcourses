import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema(
  {
    teacher: String,
    github: String,
    email: String,
    company: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Teacher = mongoose.model('Teacher', teacherSchema);

export const getAllTeacher = async () => {
  try {
    return await Teacher.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getTeacherResourceById = async (id) => {
  try {
    return await Teacher.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createTeacherResource = async (data) => {
  try {
    return await Teacher.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTeacherResource = async (id, data) => {
  try {
    return await Teacher.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTeacherResource = async (id) => {
  try {
    return await Teacher.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Teacher;
