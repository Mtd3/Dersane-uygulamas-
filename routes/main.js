const express = require("express");
const router = express.Router();
const routes = require("../controllers/routes/main");

// get reqs
router.get("/", routes.getMain);

router.get("/login", routes.getLogin);

router.get("/register", routes.getRegister);

// post reqs

router.post("/login", routes.postLogin);

module.exports = router;
