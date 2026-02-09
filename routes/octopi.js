import express from "express"
import { groups } from '../data/creatures.js'
import { octopi } from '../data/creatures.js'

const octopiRouter = express.Router()
const categoryName = "Octopi"

const getSidebarContent = () => {
  let sideBarData = octopi.map(e => e.name)
  return sideBarData
}

const findCreature = (creatureName) => {
  let formattedName = creatureName.replace(/-/g, ' ')
  let creatureObject = octopi.find(e => e.name.toLowerCase() === formattedName)
  return creatureObject
}

octopiRouter.get('/', (req, res) => {
  let creatureDescription = groups.find(e => e.name === categoryName)
  res.render('pages/index', {
    pageTitle: categoryName,
    sideBar: getSidebarContent(),
    description: creatureDescription.description
  })
})

octopiRouter.get('/species', (req, res) => {
  if(!req.query.name) res.redirect(`/${categoryName.toLowerCase()}`)
  const creature = findCreature(req.query.name.toLowerCase())
  res.render('pages/index', {
    pageTitle: creature.name,
    sideBar: getSidebarContent(),
    description: creature.description,
    habitat: creature.habitat,
    diet: creature.diet,
    lifespan: creature.lifespan,
    size: creature.size
  })
})

export default octopiRouter