const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app = express()
dotenv.config({path:'.env'})

const db = process.env.DATABASE
const PORT = process.env.PORT

mongoose.connect(db).then(() => {
    console.log('database connected')
}).catch(() => {
    console.log("can't connect to database")
})

app.get('/', (req, res) => {
    res.send('Home page');
})

app.get('/login', (req, res) => {
    res.send('Login page');
})

app.get('/signuo', (req, res) => {
    res.send('signup page');
})

app.get('/profile', (req, res) => {
    res.send('profile page');
})

app.get('/cart', (req, res) => {
    res.send('Cart');
})

app.get('/marketplace', (req, res) => {
    res.send('Marketplace');
})

app.get('*', (req, res) => {
    res.send('ERROR');
})


app.listen(PORT, () => {
    console.log('server is listening')
})