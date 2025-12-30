const Car = require("../models/Car")
const CarBrand = require("../models/CarBrand")

// Create a car
const createCar = async (req, res) => {
  try {
    let { model, title, year, carBrand } = req.body
    let owner = res.locals.token.id
    let carInfo = {
      model,
      carBrand,
      title,
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
    let { id } = req.params
    let { model, title, year, carBrand } = req.body
    let myCar = await Car.findOneAndUpdate(
      { _id: id, owner },
      { model, carBrand, year, title },
      { new: true }
    )

    if (!myCar) {
      return res.send({ msg: "Car not found" })
    }

    res.send(myCar)
  } catch (error) {
    throw error
  }
}

// delete a car

const deleteOne = async (req, res) => {
  try {
    let owner = res.locals.token.id
    let { id } = req.params

    let myCar = await Car.findOneAndDelete({ _id: id, owner })

    if (!myCar) {
      return res.send({ msg: "Car not found" })
    }

    res.send({ msg: `${myCar.title} deleted successfully!`, myCar })
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
