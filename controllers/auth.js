const User = require('../models/User')
const authMiddle = require('../middleware/auth')


const register = async (req,res) => {
  try {

    const { email, password, name, phoneNumber, role } = req.body
  let password_digest = await authMiddle.hashPassword(password)

  let existingUser = await User.exists({email})

  if(existingUser){
    return res.status(400).send('A user with that email has already been registered!')
  }else{
    const user = await User.create({name, email, password_digest, phoneNumber, role})
    res.status(200).send(user)
  }
  } catch (error) {
    console.log(error)
    return res.send('Error Registering user')
  }
}

const login = async (req,res) => {
  try {
    const {email , password} = req.body
    const user = await User.findOne({email})
    
    let isMach = await authMiddle.comparePassword(password, user.password_digest)
    if (isMach){
      let payload = {
        id: user._id,
        name: user.name,
        email: user.email
      }
      let token = authMiddle.createToken(payload)
      return res.status(200).send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred logging in!' })
  }
}

const updatePassword = () => {
  try {

  } catch (error) {

  }

}

const checkSession = () => {

}

module.exports = {
  register,
  login,
  updatePassword,
  checkSession
}
