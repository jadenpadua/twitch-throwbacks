const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
// enable CORS in development
if (true) {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  
      if (req.method.toLowerCase() === 'options') res.status(200).end();
      else next();
    });
  }
  
app.post('/cat', (req, res) => {
    console.log(res)
    console.log(req)
    
    res.send("kdsjfds");

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))