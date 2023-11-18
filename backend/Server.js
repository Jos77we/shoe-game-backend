const express = require('express')
const dotenv = require('dotenv').config()
const connectDb = require('./config/database')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

connectDb()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://loquacious-vacherin-5d89b3.netlify.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/api', require('./routes/ImagePosterRoute'))
app.use('/product', require('./routes/ProductsRoute'))
app.use('/api/user', require('./routes/UserRoute'))
app.use('/brand', require('./routes/BrandLogoRoute'))
// app.set('view engine', 'ejs');
app.listen(port, () => console.log(`server started on port ${port}`))