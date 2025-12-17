const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const methodOverride = require("method-override")
const morgan = require("morgan")

const authRouter = require('./routes/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`connected to mongoDB ${mongoose.connection.name}.`)
})

const response = (req,res) => {
  res.send('<h1> Hello Carma </h1>')
}
app.use('/auth', authRouter)
app.get('/', response)

app.use(methodOverride("_method"))
app.use(morgan("dev"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

