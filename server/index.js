const express = require('express')
app = express()

app.get('/', (req, res) => {
    res.send('Home page');
})

app.listen(8000, () => {
    console.log('server is listening')
})