import express from "express"
import * as path from 'path'

const app = express()

const __dirname = path.resolve()

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/'), (req, res) => {
  res.render('index', {
    
  })
}