import express from "express"
import { groups } from '../data/creatures.js'
import { octopi } from '../data/creatures.js'
import { getSidebarContent, findCategory } from "../index.js"

const octopiRouter = express.Router()
const categoryName = 'Octopi'

const findSpecies = (speciesName, db) => {
  let formattedName = speciesName.replace(/-/g, ' ')
  let speciesObject = db.find(e => e.name.toLowerCase() === formattedName)
  return speciesObject
}

octopiRouter.get('/', (req, res) => {
  res.render('pages/index', {
    category: findCategory(),
    sideBar: getSidebarContent(octopi)
  })
})

octopiRouter.get('/species', (req, res) => {
  if(!req.query.name) return res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findSpecies(req.query.name.toLowerCase(), octopi)
  res.render('pages/index', {
    category: categoryName,
    sideBar: getSidebarContent(octopi),
    species: creature
  })
})

export default octopiRouter