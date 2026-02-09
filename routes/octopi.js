import express from "express"
import * as path from 'path'
import { groups } from './data/creatures.js'
import { octopi } from './data/creatures.js'

const octopiRouter = express.Router()
const __dirname = path.resolve()

const categoryName = "Octopi"

const getSidebarContent = () => {
  let sideBarData = octopi.map(e => e.name)
  return sideBarData
}

const findCreature = (creature) => {
  
}

app.get('/', (req, res) => {
  let creatureDescription = groups.find(e => e.name === categoryName)
  res.render(path.join(__dirname, 'pages/index.ejs'), {
    pageTitle: categoryName,
    sideBar: getSidebarContent(),
    description: creatureDescription.description
  })
})

app.get('/', (req, res) => {
  const creatureName = "Southern Sand Octopus"
  let creatureDescription = octopi.find(e => e.name === creatureName)
  res.render(path.join(__dirname, 'pages/index.ejs'), {
    pageTitle: categoryName,
    sideBar: getSidebarContent(),
    description: creatureDescription.description
  })
})

export default octopiRouter