import express from 'express'
import exphbs from 'express-handlebars'
const app = express()
const PORT = process.env.PORT

// HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render("home");
})

app.listen(PORT, () => console.log(`Server is started at ${PORT}..`))
