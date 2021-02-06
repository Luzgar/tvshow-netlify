const { MongoClient } = require("mongodb");

const mongoDBPWD = process.env.MONGO_DB_PWD;

exports.handler = async () => {
  const uri = `mongodb+srv://kduglue:${mongoDBPWD}@cluster0.cmmwl.mongodb.net/tvshow?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const database = client.db("tvshow");
  const collection = database.collection("user");
  const query = { title: "Back to the Future" };
  await collection.insertOne(query);
  return { statusCode: 200, body: '{"body":"HELLO WORLD"}' };
};
