
const express = require('express')
const app = express()
const port = 8000
const fetch = require('node-fetch');
const { Headers } = fetch;


const cors = require('cors');
app.use(cors());
app.options('*', cors());


const myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-ik6kf618l2147csi-io");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

app.get('/gold', (req, res) => {
  
  fetch("https://www.goldapi.io/api/XAU/USD ", requestOptions)
  .then(response => response.text())
  .then(result => res.send(result))
  .catch(error => res.status(500).send({message: error}))
  
});

app.listen(port, () => {
  console.log(` Hello bitch Server started at:${port}`)
})

// app.get('/gold', async (req, res) => {
//   let resource = [];
//   try {
//     resource = await fetch(`https://www.goldapi.io/${api}/XAU/GBP`)
//     .then((res) => {
//       console.log('this is response',res)
//       return res.json();
//     });
//   } catch (e) {
//     return e;
//   }
//   console.log(resource)
//   res.send(resource)
// });

// app.get('/tweets', (req, res) => {
//   const currency = req.query.currency;
//   const symbol =  req.query.symbol;
//   //const date = req.query.date
//   myHeaders.get('/gold' :{symbol}, (error, tweets, response) => {
//     if (!error) {
//       res.send(tweets)
//     } else {
//       res.status(500).send({message: error});
//     }s
//   });
// })



