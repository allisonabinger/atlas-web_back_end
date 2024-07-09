import { createClient } from "redis";
import { get } from "request";
import { promisify } from 'util';

const client = createClient();

// converts redis callback methods into promise based functions
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// log successful connection message
client.on('connect', () => {
    console.log('Redis client connected to server')
});


// log error for unsuccessful connection
client.on('error', (error) => {
    console.error(`Redis client not connected to server: ${error.message}`)
});

function setNewSchool(schoolName, value) {
    setAsync(schoolName, value)
        .then((reply) => {
            console.log(`Reply: ${reply}`);
        })
        .catch((err) => {
            console.error(`Error: ${err}`);
        });
    }

async function displaySchoolValue(schoolName) {
    try {
        const reply = await getAsync(schoolName);
        console.log(reply);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

// function calls for example:
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');



// once the Redis server is running, run the following command:
// npm run dev 0-redis_client.js
