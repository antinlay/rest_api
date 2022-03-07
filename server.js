const express = require("express")
const mongo = require("mongodb").MongoClient
const url = "mongodb://127.0.0.1:27017/:27017"

const app = express()

let db, guests, cards

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
    db = client.db("cardcards")
    guests = db.collection("guests")
    cards = db.collection("cards")
  }
)
app.post("/guest", (req, res) => {
  const phoneNum = req.body.phoneNum
  const name = req.body.name
  guests.insertOne({
     name: name,
     phoneNum: phoneNum
   }, (err, result) =>
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
    res.status(200).json({ guests: items })
  })
})
app.post("/card", (req, res) => {
  cards.insertOne(
    {
      guest: req.body.guest,
      phoneNum: req.body.phoneNum,
      date: req.body.date,
      amount: req.body.amount,
      category: req.body.category,
      serialNo: req.body.serialNo
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err})
        return
      }
      res.status(200).json({ ok: true })
    }
  )
})
app.get("/cards", (req, res) => {
  cards.find({ guest: req.body.guest }).toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ cards: items })
  })
})

app.listen(3000, () => console.log("Server ready!"))
