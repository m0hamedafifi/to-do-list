const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev")); // log requests to the console

app.set("views", path.join(__dirname, "views")); // specify the views directory
app.set("view engine", "ejs"); // set up ejs for templating

app.use(bodyParser.json()); // parse incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: false })); // parse request bodies in middleware functions and make them available

app.use(express.static(path.join(__dirname, "public"))); // serve static files from public folder

// Run Redis

redis.runRedisServer();
// Function to retrieve data from Redis database using key provided in request parameter


app.get("/", async(req, res) => {
  let title = "Task List";
  
  let tasks =   await redis.client.LRANGE("tasks", 0, -1 )
  // let data = await client.LRANGE("tasks", 0, -1)
  
  res.render("index", {
    title: title,
    tasks: tasks,
  });
});
app.listen(port, () => console.log(`server started on port ${port}!`));
