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

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redisCallback);
}

function redisCallback(err, reply) {
    if (err) {
        console.error(`Error: ${err}`);
    } else {
        console.log(`Reply: ${reply}`);
    }
}

function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, reply) => {
        if (err) {
            console.error(`Error: ${err}`);
        } else {
            console.log(`${reply}`);
        }
    });
}

// function calls for example:
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco')



// once the Redis server is running, run the following command:
// npm run dev 0-redis_client.js
