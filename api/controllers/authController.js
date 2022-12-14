import { db } from '../database/connect.js'
import User from '../models/userModel.js'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
  // CHECK IF USER IXIST IN DB
  let existUser = User.find(req.body.email)
  existUser.then((value) => {
    if (value) {
      res.status(409).json('email already exist')
    } else {
      // HASH PASSWORD
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(req.body.password, salt)

      // GET INPUT DATA  FROM USER REQ
      let newUser = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        profile_name: req.body.profileName,
      }
      // CREATE NEW USER
      let result = User.create(newUser)
      result
        .then((value) => {
          res.status(200).json(value)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  })
}

export const login = (req, res) => {
  // CHECK IF MAIL EXIST
  let existUser = User.find(req.body.email)
  existUser.then((value) => {
    if (value) {
      // COMPAIRE PASSWORDS
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        value.password
      )
      if (!checkPassword)
        return res.status(403).json('invalid email or password')

      const { password, ...others } = value
      // GENERATE TOKEN
      const token = jwt.sign({ id: value.id }, process.env.JWT_KEY)

      res
        .cookie('accessToken', token, { httpOnly: true })
        .status(200)
        .json(others)
    } else {
      return res.status(403).json('invalid email or password')
    }
  })
}

export const logout = (req, res) => {
  res
    .clearCookie('accessToken', {
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json('user has been logout')
}
