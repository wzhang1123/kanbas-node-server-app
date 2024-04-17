// import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    // console.log("this is req.params" + req.params);
    // print("this is req.body" + req.body);
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  const createModule = async (req, res) => {
    try {
      const { cid } = req.params;
      const newModule = {
        ...req.body,
        course: cid,
      };
      console.log("Creating new module:", newModule);
      const module = await dao.createModule(newModule);
      res.json(module);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while creating the module");
    }
  };

  const findModulesByCourse = async (req, res) => {
    const cid = req.params.cid;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  };

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };

  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
  app.get("/api/courses/:cid/modules", findModulesByCourse);
  app.get("/api/modules", findAllModules);
}
