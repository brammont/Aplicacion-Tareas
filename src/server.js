
const express = require('express')
const app = express()

//rutas

//configuracion
app.set('port',process.env.PORT || 3000);
// middlewares

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'),() => {
  console.log(`Server on port 3000`)
})
