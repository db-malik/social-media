import User from '../models/userModel.js'

//get all users
export const getUsers = (req, res) => {
  let result = User.getAll()
  result
    .then(function (value) {
      res.json(value)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// get user by id
export const getUser = (req, res) => {
  let result = User.find(req.params.id)
  result
    .then(function (value) {
      res.json(value)
    })
    .catch(function (error) {
      console.log(error)
    })
}

// insert user
export const updateUser = (req, res) => {}
