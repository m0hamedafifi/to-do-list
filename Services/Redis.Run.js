const redis = require("redis");

// Create a client object that will be used to interact with Redis server and connect to Redis Server
var client = redis.createClient();

runRedisServer = async () => {
    try {
        await client.connect(); 
    } catch (err) {
        console.log(`Error connecting to Redis: ${err}`)
    }
}
disconnectRedis = async ()=>{
    try {
        await client.quit(); 
    } catch (err) {
        console.log(`Error disconnecting from Redis: ${err}`)
    }
}

client.on('ready', () => {
  console.log('::> Redis Client Connected');

});
client.on('error', (err) => console.log('<:: Redis Client Error', err));

client.on('end', () => console.log('<:: Redis Client Disconnected'));

client.on('reconnecting', () => console.log('<:: Redis Client Reconnecting'));

module.exports={
    runRedisServer,
    client,
    disconnectRedis,
}