// get reqs
exports.getMain = (req, res) => {
  res.render("main", { layout: "index" });
};

exports.getLogin = (req, res) => {
  res.render("login", {
    layout: "index",
  });
};

exports.getRegister = (req, res) => {
  res.render("register", {
    layout: "index",
  });
};

// post reqs

exports.postLogin = (req, res) => {
  res.send(req.body);
};

// router.get("/champs", (req, res) => {
//   res.render("champs", {
//     layout: "index",
//     suggestedChamps: fakeApi,
//     listExists: true,
//   });
// });
