import express from "express"
import * as path from 'path'
import octopiRouter from "./routes/octopi.js"
import seahorseRouter from "./routes/seahorses.js"
import { groups } from './data/creatures.js'

const app = express()
const PORT = 3456

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.use("/octopi", octopiRouter)
app.use("/seahorses", seahorseRouter)
// app.use("/crustaceans", crustaceansRouter)
// app.use("/reef-dwellers", reefDwellersRouter)

//Helper Functions//
const categoryName = "Home"

export const getSidebarContent = (db) => {
  let sideBarData = db.map(e => e.name)
  return sideBarData
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
    sideBar: getSidebarContent(groups)
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app