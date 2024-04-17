import model from "./model.js";
export const addModule = (module) => {
  delete module._id;
  return model.create(module);
};

export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const findModuleByCourse = (courseId) =>
  model.find({ course: courseId });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
