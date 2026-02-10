import express from "express"
import { groups } from '../data/creatures.js'
import { seahorses } from '../data/creatures.js'
import { getSidebarContent, findCategory, findNavContent } from "../index.js"

const seahorseRouter = express.Router()
const categoryName = 'Seahorses'

const findSpecies = (speciesName, db) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = db.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

seahorseRouter.get('/', (req, res) => {
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: findCategory(groups, categoryName),
    sideBar: getSidebarContent(seahorses, categoryName)
  })
})

seahorseRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase(), seahorses)
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: categoryName,
    sideBar: getSidebarContent(seahorses, categoryName),
    species: creature
  })
})

export default seahorseRouter