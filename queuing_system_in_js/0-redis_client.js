import { createClient } from "redis";

const client = createClient();

// log successful connection message
client.on('connect', () => {
    console.log('Redis client connected to server')
});


// log error for unsuccessful connection
client.on('error', (error) => {
    console.error(`Redis client not conencted to server: ${error.message}`)
});


// once the Redis server is running, run the following command:
// npm run dev 0-redis_client.js
