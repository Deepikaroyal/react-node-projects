const userFacade = require("../../../facade/userFacade");


async function getUser(req, res) {
  // console.log('@@@@@@@getUser function called');
  try {
    const result = await userFacade.getAllUser();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to find any user");
  }
}

async function createUser(req, res) {
  try {
    const result = await userFacade.create(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to create new  user");
  }
}

async function upload(req, res) {
  try {
    const result = await userFacade.upload(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to upload user profileImage");
  }
}

async function getProfile(req, res) {
  try {
    const result = await userFacade.getProfile(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to get  user profileImage ");
  }
}

async function uploadPosts(req, res) {
  try {
    const result = await userFacade.uploadPosts(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to upload user posts");
  }
}

async function login(req, res) {
  try {
    const result = await userFacade.login(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("inside catch ")
    res.status(400).send(error || "Unable to login  user");
  }
}


async function editUser(req, res) {
  try {
    const result = await userFacade.edit(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to edit  user");
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.query._id;
    const result = await userFacade.deleteUser(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error || "Unable to delete user");
  }
}



module.exports = {
  getUser: getUser,
  createUser: createUser,
  login: login,
  editUser:editUser,
  upload:upload,
  getProfile:getProfile,
  uploadPosts:uploadPosts,
  deleteUser:deleteUser,
};

  

// module.exports = {
//   getUser: (req, res) => {
//     userFacade
//       .getAllUser()
//       .then(function (result) {
//         if (res) {
//          return  res.status(200).send(result);
//         }
//       })
//       .catch(function () {
//         if (res) {
//          return  res.status(400).send("unable to find any user");
//         }
//       });
//   },
// };
