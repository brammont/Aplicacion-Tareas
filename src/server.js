const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const indexRoutes = require('./routes/index');
const mongoose = require('mongoose');

//conexion a base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err))

//configuracion
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended:false
}));
//rutas
app.use('/',indexRoutes);
//start server

app.listen(app.get('port'),() => {
  console.log(`Server on port ${app.get('port')}`)
})
