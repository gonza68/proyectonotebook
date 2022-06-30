const express = require('express')
const path = require('path')
const methodOverride = require('method-override')

const app = express()

app.use(express.static(path.join('public')))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(express.json())

app.set('view engine', 'ejs')
app.set ('views', path.join(__dirname, '/views'));

const mainRouter = require('./routes/main')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const moviesRouter = require('./routes/movies')

app.use("/", mainRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/movies', moviesRouter)


app.listen(3000,() =>{
    console.log('servidor corriendo en http://localhost:3000')
})
