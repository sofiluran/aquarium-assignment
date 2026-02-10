import express from "express"
import { groups } from '../data/creatures.js'
import { about } from '../data/creatures.js'
import { getSidebarContent, findCategory, findNavContent } from "../index.js"

const aboutRouter = express.Router()
const categoryName = 'About'

const findSpecies = (speciesName, db) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = db.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

aboutRouter.get('/', (req, res) => {
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: findCategory(groups, categoryName),
    sideBar: getSidebarContent(about)
  })
})

aboutRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase(), about)
  res.render('pages/index', {
    navMenu: findNavContent(),
    category: categoryName,
    sideBar: getSidebarContent(about),
    species: creature
  })
})

export default aboutRouter