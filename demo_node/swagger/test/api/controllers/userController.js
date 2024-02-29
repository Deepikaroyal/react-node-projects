
const userFacade = require("../../../facade/userFacade");


async function getUser(req, res) {
  try {
    const result = await userFacade.getAllUser();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to find any user");
  }
}

module.exports = {
  getUser: getUser
};

  

  