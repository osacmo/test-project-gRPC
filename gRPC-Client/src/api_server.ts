import express from 'express'
const app = express();
const port = 3000

app.use(express.json())
app.use('/usuario', require('./routes/usuarios'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});