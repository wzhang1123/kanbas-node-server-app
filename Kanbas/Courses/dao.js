import model from "./model.js";
export const createCourse = (course) => {
  delete course._id;
  model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
// export const updateCourse = (courseId, course) =>
//   model.updateOne({ _id: courseId }, { $set: course });

export const updateCourse = (courseId, course) => {
  console.log("course id in dao", courseId);
  return model.updateOne({ _id: courseId }, { $set: course });
};
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
