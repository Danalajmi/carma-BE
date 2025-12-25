const Car = require("../models/Car")
const CarBrand = require("../models/CarBrand")

// Create a car
const createCar = async (req, res) => {
  try {
    let carBrand = await CarBrand.findOne({brand: req.body.carBrand})

    let { model, title, year, make } = req.body
    let owner = res.locals.token.id
    let carInfo = {
      model,
      carBrand: carBrand._id,
      title,
      make,
      year,
      owner,
    }

    let carExists = await Car.exists({ owner, title })
    if (carExists) {
      return res.send({ msg: "Please choose a different name" })
    }
    let car = await Car.create(carInfo)

    res.send(car)
  } catch (error) {
    throw error
  }
}

// Get all cars

const getCars = async (req, res) => {
  try {
    let owner = res.locals.token.id
    let myCars = await Car.find({ owner })
    res.send(myCars)
  } catch (error) {
    throw error
  }
}

// Get one car
const getOne = async (req, res) => {
  try {
    let owner = res.locals.token.id
    let title = req.params.title
    let myCar = await Car.findOne({ owner, title })
    res.send(myCar)
  } catch (error) {}
}

// update a car
const updateCar = async (req, res) => {
  try {
    let owner = res.locals.token.id
    let { title } = req.params
    let { model, carBrand, year } = req.body

    let carExists = await Car.exists({ owner, title: req.body.title })
    if (carExists) {
      return res.send({ msg: "Please choose a different name" })
    }
    let myCar = await Car.findOneAndUpdate(
      { owner, title },
      { model, carBrand, year, title: req.body.title }
    )
    console.log(myCar)
    res.send(myCar)
  } catch (error) {
    throw error
  }
}

// delete a car

const deleteOne = async (req, res) => {
  try {
    let owner = res.locals.token.id
    let title = req.params.title
    let myCar = await Car.findOneAndDelete({ owner, title })
    if(!myCar){
      return res.send({msg: `Couldn't find ${title}`})
    }
    res.send({msg: `${title} Deleted Successfully!`, myCar})
  } catch (error) {
    throw error
  }
}

module.exports = {
  createCar,
  getCars,
  getOne,
  updateCar,
  deleteOne,
}
