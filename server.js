const express = require("express")
const mongo = require("mongodb").MongoClient
const url = "mongodb://127.0.0.1:27017/:27017"

const app = express()

let db, guests, points

app.use(express.json())

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
  const name = req.body.name
  guests.insertOne({ name: name}, (err, result) =>
  {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    console.log(result)
    res.status(200).json({ ok: true})
  })
})
app.get("/guests", (req, res) => {
  guests.find().toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ trips: items })
  })
})
app.post("/point", (req, res) => {
  /* */
})
app.get("/points", (req, res) => {
  /* */
})

app.listen(3000, () => console.log("Server ready!"))
