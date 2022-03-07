const express = require("express")
const mongo = require("mongodb").MongoClient
const url = "mongodb://127.0.0.1:27017/:27017"

const app = express()

let db, guests, points

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("cardpoints")
    guests = db.collection("guests")
    points = db.collection("points")
  }
)
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
