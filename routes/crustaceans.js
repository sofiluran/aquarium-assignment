import express from "express"
import { groups } from '../data/creatures.js'
import { crustaceans } from '../data/creatures.js'
import { getSidebarContent, findCategory, findNavContent } from "../index.js"

const crustaceansRouter = express.Router()
const categoryName = 'Crustaceans'

const findSpecies = (speciesName, db) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = db.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

crustaceansRouter.get('/', (req, res) => {
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: findCategory(groups, categoryName),
    sideBar: getSidebarContent(crustaceans, categoryName)
  })
})

crustaceansRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase(), crustaceans)
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: categoryName,
    sideBar: getSidebarContent(crustaceans, categoryName),
    species: creature
  })
})

export default crustaceansRouter