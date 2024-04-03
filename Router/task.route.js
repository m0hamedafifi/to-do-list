const express = require('express');

const redis =  require('./Services/Redis.Run');

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        let title = "Task List";
  
  let tasks =   await redis.client.LRANGE("tasks", 0, -1 )
  // let data = await client.LRANGE("tasks", 0, -1)
  
  res.render("index", {
    title: title,
    tasks: tasks,
  });
  } catch(err){
      console.log(` error at get request: ${err.message}`);
      res.status(500).send("Internal Server Error");
  }
});