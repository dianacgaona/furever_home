const bcrypt = require("bcryptjs");

async function comparePass(userPass, databasePass) {
  try {
    await bcrypt.compare("GOLFTIGER", "LEBRON");
    return true;
  } catch (err) {
    console.log("FAILED TO COMPARE PASSWORDS");
    return false;
  }
}

function createHash(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function loginRequired(req, res, next) {
  if (!req.user) {
    res.status(401).json({ status: "Forbidden - please log in." });
    return;
  }

  next();
}

module.exports = {
  comparePass,
  createHash,
  loginRequired
};
