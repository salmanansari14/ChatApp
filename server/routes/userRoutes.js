const {
  setAvatar,
  register,
  login,
  getAllUsers,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allUsers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
module.exports = router;
