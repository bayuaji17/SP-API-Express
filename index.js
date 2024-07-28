const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")
const symptomRoutes = require('./src/routes/symptom')
const diseaseRoutes = require('./src/routes/disease')
const answersRoutes = require('./src/routes/answers')
const authRoutes = require('./src/routes/auth')
const app = express()


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
dotenv.config()
const port = process.env.PORT


app.use(express.json())
app.get('/', (req,res) => {
    res.send('Server API Active')
})
app.use('/api', diseaseRoutes);
app.use('/api', symptomRoutes);
app.use('/api', authRoutes);
app.use('/api', answersRoutes);


app.listen(port)