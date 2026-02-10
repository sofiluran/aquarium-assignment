import express from "express"
import { groups } from '../data/creatures.js'
import { reefDwellers } from '../data/creatures.js'
import { getSidebarContent, findCategory, findNavContent } from "../index.js"

const reefDwellersRouter = express.Router()
const categoryName = 'Reef Dwellers'

const findSpecies = (speciesName, db) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = db.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

reefDwellersRouter.get('/', (req, res) => {
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: findCategory(groups, categoryName),
    sideBar: getSidebarContent(reefDwellers)
  })
})

reefDwellersRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase(), reefDwellers)
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: categoryName,
    sideBar: getSidebarContent(reefDwellers),
    species: creature
  })
})

export default reefDwellersRouter