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

function createHash(hashName, hashObj) {
    const entries = Object.entries(hashObj);
    entries.forEach(([field, value]) => {
        client.hset(hashName, field, value, redisCallback);
    });
}


function redisCallback(err, reply) {
    if (err) {
        console.error(`Error: ${err}`);
    } else {
        console.log(`Reply: ${reply}`);
    }
}

function displayHash(hashName) {
    client.hgetall(hashName, (err, obj) => {
        if (err) {
            console.error(`Error: ${err}`);
        } else {
            console.log(obj);
        }
    });
}

// call functions per example

const hashName = 'HolbertonSchools';
const hashData = {
    'Portland': '50',
    'Seattle': '80',
    'New York': '20',
    'Bogota': '20',
    'Cali': '40',
    'Paris': '2'
}

createHash(hashName, hashData);
displayHash(hashName);
