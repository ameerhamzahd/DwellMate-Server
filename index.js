const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dwellmate.lzqu57f.mongodb.net/?retryWrites=true&w=majority&appName=DwellMate`;

app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const propertyCollection = client.db("DwellMateDB").collection("properties");

    // POSTING AN ADD OF PROPERTY
    app.post("/properties", async (request, response) => {
      const newProperty = request.body;
      const result = await propertyCollection.insertOne(newProperty);

      response.send(result);
    })

    //TO  GET ALL THE PROPERTIES
    app.get("/properties", async (request, response) => {
      const result = await propertyCollection.find().toArray();

      response.send(result);
    })

    // TO GET SPECIFIC PROPERTY USING ID
    app.get("/properties/:id", async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await propertyCollection.findOne(query);

      response.send(result);
    })

    // TO GET SPECIFIC PROPERTY USING EMAIL
    app.get("/properties/user/:email", async (request, response) => {
      const email = request.params.email;
      const query = { email: email }
      const result = await propertyCollection.find(query).toArray();

      response.send(result);
    })

    // TO UPDATE PROPERTY DETAILS
    app.put("/properties/:id", async (request, response) => {
      const id = request.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updatedProperty = request.body;
      const updatedDoc = {
        $set: updatedProperty
      }

      const result = await propertyCollection.updateOne(filter, updatedDoc, options);
      response.send(result);
    })

    // FOR LIMIT OPERATOR
    app.get("/properties/listings/:availability", async (request, response) => {
      const available = request.params.availability;
      const query = { availability: "Available" };
      const result = await propertyCollection.find(query).limit(6).toArray();

      response.send(result);
    });

    // SAVING THE COUNTER OF LIKE BUTTON
    app.put("/properties/likes/:id", async (request, response) => {
      const id = request.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $inc: { likes: 1 }
      };
      const options = {
        returnDocument: "after"
      };
      const result = await propertyCollection.findOneAndUpdate(
        filter,
        updateDoc,
        options
      );

      response.send(result.value);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (request, response) => {
  response.send("DwellMate is running...")
})

app.listen(port, () => {
  console.log(`DwellMate is running on port: ${port}`)
})