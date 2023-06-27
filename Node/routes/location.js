const express = require("express");
const mongodb = require("mongodb");
const { MongoClient } = mongodb;

const router = express.Router();

const uri = `mongodb+srv://xavir84543:2jdo0cGKzU02usHl@cluster0.p0nx9mc.mongodb.net/?retryWrites=true&w=majority`;
// 'mongodb+srv://mongodb:F5Rssx6WPZN9hyJR@cluster0.jy1wi.mongodb.net/locations?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

const locationStorage = {
  location: [],
};

router.post("/add-location", async (req, res, next) => {
  try {
    await client.connect();
    const database = client.db("locations");
    const collection = database.collection("user-locations");
    // create a document to be inserted
    const doc = {
      address: req.body.address,
      coords: { lat: req.body.lat, lng: req.body.lng },
    };
    const result = await collection.insertOne(doc);
    res.json({ message: "Stored location!", locId: result.insertedId });
    console.log(
      `${result.insertedCount} location documents were inserted with the _id: ${result.insertedId}`
    );
  } catch (err) {
    console.dir(err);
  } finally {
    // await client.close(); // Commented as throwing some topology errors on mongo connection
  }
  // const id = Math.random();
  // locationStorage.location.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
  // res.json({ message: "Stored Location!", locId: id });
});

router.get("/location/:lid", async (req, res, next) => {
  // const location = locationStorage.location.find((el) => el.id === locationId);
  const locationId = req.params.lid;
  console.log(locationId);
  try {
    await client.connect();
    const database = client.db("locations");
    const collection = database.collection("user-locations");

    // Query for a movie that has the title 'The Room'
    const query = {
      _id: new mongodb.ObjectId(locationId),
    };
    // since this method returns the matched document, not a cursor, print it directly
    const doc = await collection.findOne(query);
    console.log(doc);

    if (!doc) {
      return res.status(404).json({
        message: "NOT FOUND!",
      });
    }
    res.json({
      message: "Retrived Location",
      coordinates: doc.coords,
      address: doc.address,
    });
  } catch (err) {
    console.dir(err);
  } finally {
    // await client.close(); // Commented as throwing some topology errors on mongo connection
  }
});

module.exports = router;
