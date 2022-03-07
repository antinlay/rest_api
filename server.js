const express = require("express")
const mongo = require("mongodb").MongoClient

const app = express()

app.post("/guest", (req, res) => {
  /* */
})
app.get("/guests", (req, res) => {
  /* */
})
app.post("/point", (req, res) => {
  /* */
})
app.get("/points", (req, res) => {
  /* */
})

app.listen(3000, () => console.log("Server ready!"))
