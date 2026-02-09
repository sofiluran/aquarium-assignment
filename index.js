import express from "express"
import * as path from 'path'
import octopiRouter from "./routes/octopi.js"
import { groups } from './data/creatures.js'

const app = express()
const PORT = 3456

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.use("/octopi", octopiRouter)
// app.use("/crustaceans", crustaceansRouter)
// app.use("/reef-dwellers", reefDwellersRouter)
// app.use("/seahorses", seahorsesRouter)


//Helper Functions//
const categoryName = "Home"

export const getSidebarContent = (db) => {
  let sideBarData = db.map(e => e.name)
  return sideBarData
}

export const findCategory = (db = groups) => {
  let currentCategory = db.find(e => e.name === categoryName)
  return currentCategory
}

app.get('/', (req, res) => {
  res.render(path.join('pages/index'), {
    category: findCategory(),
    sideBar: getSidebarContent(groups)
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))