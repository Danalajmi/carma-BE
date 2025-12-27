const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")

const methodOverride = require("method-override")
const morgan = require("morgan")



const authRouter = require('./routes/auth')
const garageRouter = require("./routes/garages")
const serviceReqRouter = require("./routes/serviceRequest")
const carRouter = require('./routes/cars')
const serviceRouter = require('./routes/service')


app.use(cors())
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
app.use("/garages", garageRouter)
app.use("/cars", carRouter)
app.use('/services', serviceRouter)
app.get('/', response)
app.use('/servicereqs',serviceReqRouter)



app.use(methodOverride("_method"))
app.use(morgan("dev"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

