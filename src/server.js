
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');


//configuracion
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// middlewares
app.use(morgan('dev'))
//rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'),() => {
  console.log(`Server on port ${app.get('port')}`)
})
