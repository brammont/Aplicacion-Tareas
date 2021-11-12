const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const indexRoutes = require('./routes/index')

//configuracion
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded);
//rutas
app.use('/',indexRoutes);
//start server
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'),() => {
  console.log(`Server on port ${app.get('port')}`)
})
