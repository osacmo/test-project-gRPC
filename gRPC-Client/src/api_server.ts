import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT_APP || 3001;


app.use(express.json());

app.use('/usuario', require('./routes/usuarios'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

    

