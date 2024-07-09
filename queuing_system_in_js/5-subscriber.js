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

client.subscribe('holberton school channel');

client.on('message', (ch, msg) => {
    console.log(`Received emssage '${msg}' on channel '${ch}'`);
    if (msg === 'KILL_SERVER') {
        client.unsubscribe('holberton school channel');
        client.quit();
    }
});
