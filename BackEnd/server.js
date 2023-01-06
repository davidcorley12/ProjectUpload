const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const path = require('path');
/*Use the server to host the single page application,joins the build to the server*/
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@movies.z2po1go.mongodb.net/test');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  director: String
});

const movieModel = mongoose.model('Movies', movieSchema);

app.post('/api/movies',(req,res)=>{
  console.log(req.body);

  movieModel.create({
    title: req.body.title,
    poster:req.body.poster,
    director:req.body.director
  })
  
  res.send('Data Recieved');
})

app.get('/api/movies', (req, res) => {
  movieModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/movie/:id', (req, res)=>{
  console.log(req.params.id);
  movieModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})