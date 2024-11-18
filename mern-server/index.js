const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// middleware for connection to frontendside
const cors = require("cors");
app.use(cors());
app.use(express.json());

//Add connection of mongoDB(database configurration)
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-wordshelf:jzkYQPTMIFC9N7Am@cluster0.vfj2uz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collections of documents
    const bookCollection = client.db("BookInventory").collection("books");

    //insert a book to the database using post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      // console.log(data);
      // const result = await bookCollection.insertOne(data); // To insert one data at a time
      const result = await bookCollection.insertMany(data); // To insert many data at a time
      res.send(result);
    });

    //get all books from database
    // app.get("/all-books", async (req, res) => {
    //   const books = bookCollection.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // }); 
    // >>>> instead this code use or go to find by category (code)

    //update a book data: using patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;

      const filter = {
        _id: new ObjectId(id),
      };
      const options = {upsert: true};

      const updateDoc = {
        $set: {
            ...updateBookData
        }
      }
      // update
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete a book data
    app.delete("/book/:id", async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollection.deleteOne(filter);
        res.send(result);
    });

    //find by category
    app.get("/all-books", async (req, res) => {
        let query = {};
        if(req.query?.category){
            query = { category: req.query.category };
        }

        const result = await bookCollection.find(query).toArray();
        res.send(result);
    })

    //To get sigle book data
    app.get('/book/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);
      })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
