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

function publishMessage(msg, time) {
    setTimeout(() => {
        console.log(`About to send ${msg}`)
        client.publish('holberton school channel', msg);
    }, time);
}

// calls given by task
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
