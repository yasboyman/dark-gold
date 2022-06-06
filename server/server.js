const express = require("express");
const app = express();
const port = 8000;
const fetch = require("node-fetch");
const { Headers } = fetch;

const cors = require("cors");
app.use(cors());
app.options("*", cors());

const myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-ik6kf618l2147csi-io");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

app.get("/gold", (req, res) => {
  fetch("https://www.goldapi.io/api/XAU/USD ", requestOptions)
    .then((response) => response.text())
    .then((result) => res.send(result))
    .catch((error) => res.status(500).send({ message: error }));
});

app.listen(port, () => {
  console.log(` Hello bitch Server started at:${port}`);
});
