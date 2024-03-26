const Lab5 = (app) => {
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignmetn 5");
  });
};

export default Lab5;
