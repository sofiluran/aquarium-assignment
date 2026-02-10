import express from "express"
import { seahorses } from '../data/creatures.js'
import { getSidebarContent, findCategory } from "../index.js"

const seahorseRouter = express.Router()
const categoryName = 'Seahorses'

const findSpecies = (speciesName, db) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = db.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

seahorseRouter.get('/', (req, res) => {
  res.render('pages/index', {
    category: findCategory(),
    sideBar: getSidebarContent(seahorses)
  })
})

seahorseRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase(), seahorses)
  res.render('pages/index', {
    category: categoryName,
    sideBar: getSidebarContent(seahorses),
    species: creature
  })
})

export default seahorseRouter