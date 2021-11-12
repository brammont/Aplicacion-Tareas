
const express = require('express');
const app = express();
const path = require('path');

//rutas

//configuracion
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
// middlewares

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'),() => {
  console.log(`Server on port ${app.get('port')}`)
})
