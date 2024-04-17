// import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex((m) => m._id === mid);
  //   db.modules[moduleIndex] = { ...db.modules[moduleIndex], ...req.body };
  //   res.sendStatus(204);
  // });

  const deleteModule = async (req, res) => {
    // console.log("this is req.params" + req.params);
    // print("this is req.body" + req.body);
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });

  // const createModule = async (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     // _id: new Date().getTime().toString(),
  //   };
  //   const module = await dao.createModule(newModule);
  //   res.json(module);
  // };

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
  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });

  const findModulesByCourse = async (req, res) => {
    const cid = req.params.cid;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  };
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules.filter((m) => m.course === cid);
  //   res.send(modules);
  // });

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
