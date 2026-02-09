import express from "express"
import * as path from 'path'
import octopiRouter from "./routes/octopi.js"
import { groups } from './data/creatures.js'

const app = express()
const PORT = 3456
const __dirname = path.resolve()

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.use("/octopi", octopiRouter)
// app.use("/crustaceans", crustaceansRouter)
// app.use("/reef-dwellers", reefDwellersRouter)
// app.use("/seahorses", seahorsesRouter)

app.get('/', (req, res) => {
  let sideBarData = groups.map(e => e.name)
  res.render(path.join(__dirname, 'pages/index.ejs'), {
    pageTitle: "Home",
    sideBar: sideBarData,
    
  })
})

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))