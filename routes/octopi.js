import express from "express"
import { groups } from '../data/creatures.js'
import { octopi } from '../data/creatures.js'

const octopiRouter = express.Router()
const categoryName = "Octopi"

//Returns an array with all the species in a category//
const getSidebarContent = () => {
  let sideBarData = octopi.map(e => e.name)
  return sideBarData
}

//Returns an object with the species data//
const findSpecies = (speciesName) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = octopi.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

//Returns an object with the species group info//
const findCategory = () => {
  let currentCategory = groups.find(e => e.name === categoryName)
  return currentCategory
}

octopiRouter.get('/', (req, res) => {
  res.render('pages/index', {
    category: findCategory(),
    sideBar: getSidebarContent()
  })
})

octopiRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase())
  res.render('pages/index', {
    category: categoryName,
    sideBar: getSidebarContent(),
    species: creature
  })
})

export default octopiRouter