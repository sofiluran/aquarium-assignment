import express from "express"
import * as path from 'path'
import octopiRouter from "./routes/octopi.js"
import seahorseRouter from "./routes/seahorses.js"
import crustaceansRouter from "./routes/crustaceans.js"
import reefDwellersRouter from "./routes/reef-dwellers.js"
import aboutRouter from "./routes/about.js"
import { groups } from './data/creatures.js'

const app = express()
const PORT = 3456

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.use("/octopi", octopiRouter)
app.use("/seahorses", seahorseRouter)
app.use("/crustaceans", crustaceansRouter)
app.use("/reef-dwellers", reefDwellersRouter)
app.use("/about", aboutRouter)

//Helper Functions//
const categoryName = "Home"

export const getSidebarContent = (db, category) => {
  let categoryGroups = db.map(e => e.name)
  let sideBarTitle = category
  let sidebarData = {
    title: sideBarTitle,
    data: categoryGroups
  }
  return sidebarData
}

export const findCategory = (db = groups, category) => {
  let currentCategory = db.find(e => e.name === category)
  return currentCategory
}

export const findNavContent = (db = groups) => {
  let navData = db.filter(e => e.name !== "Home")
  return navData
}

app.get('/', (req, res) => {
  res.render(path.join('pages/index'), {
    navMenu: findNavContent(),
    category: findCategory(groups, categoryName),
    sideBar: getSidebarContent(groups, categoryName)
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app
