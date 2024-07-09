  <h1 align="center">
  Queueing Systems in JavaScript with  
  <img src="https://1000logos.net/wp-content/uploads/2020/08/Redis-Logo.png" align="center" width="150">
   </h1>


## Introduction
Redis, or Remote Dictionary Server is an in-memory database. It is often used as a Cache to improve performance, but it is also a fully-fledged primary database that can be used to store and persist multiple data formats for complex microservice applciations.

In this context, I use Redis to create a Redis client instance to connect to a server and perform operations such as setting and getting values. I also utilize Kue, a priority job queue backed by Redis, to provide tools for job creation, processing, and lifecycle management. 

The concepts and tasks I built can be used together to build scalable, real-time applications. Leveraging Redis for data storage, caching, and job processing are foundational for building modern web applications that handle large volumes or data and concurrent user interactions. 



## Learning Objectives

1. **How to run a Redis server on your machine**

2. **How to use a Redis client with Node JS for basic operations**

3. **How to store hash values in Redis**

4. **How to use Kue as a queue system**

5. **How to build a basic Express app interacting with a Redis server**

6. **How to the build a basic Express app interacting with a Redis server and queue**

---
---

# Review:
Be sure to run `npm install` before attempting to run any of the scripts. The `node_modules/` directory was specifically excluded from this repository. The `dump.rbd` file stores cached information used for some of the projects.

### [Basics of Redis](../0x0B_redis_basic/)
Review my previous project, Basics of Redis, for more information on getting started with Redis. 

### [Express](../Node_JS/)
Review my previous project, Node_JS, for more information on express and building Express apps.


# Code Examples and Highlighted Tasks

## [Node Redis Client](0-redis_client.js)
Connecting to a Redis Server.
After importing the `createClient` method from `redis`, you can simple call upon it and add event listeners to log when the server is connected. 

```
    client.on('connect', () => {
        console.log('Redis client connected to server')
    });
```

### Usage:
```
$ npm run dev 0-redis_client.js


> queuing_system_in_js@1.0.0 dev
> nodemon --exec babel-node --presets @babel/preset-env 0-redis_client.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
Redis client connected to server
```


&nbsp;
&nbsp;

## [Node Redis Client and Advanced Operations - Using a Hash](4-redis_advanced_op.js)

Using the client to store a hash value, using `hset` and `hgetall`:

```
    function displayHash(hashName) {
        client.hgetall(hashName, (err, obj) => {
            if (err) {
                console.error(`Error: ${err}`);
            } else {
                console.log(obj);
            }
        });
    }

This portion will log the object of the given hashName.
```

### Usage:

```
$ npm run dev 4-redis_advanced_op.js 

> queuing_system_in_js@1.0.0 dev
> nodemon --exec babel-node --presets @babel/preset-env 4-redis_advanced_op.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 4-redis_advanced_op.js`
Redis client connected to server
Reply: 0
Reply: 0
Reply: 0
Reply: 0
Reply: 0
Reply: 0
{
  Portland: '50',
  Seattle: '80',
  'New York': '20',
  Bogota: '20',
  Cali: '40',
  Paris: '2'
}
```

&nbsp;
&nbsp;

## [Tracking Progress and Errors with Kue - Jobs](7-job_creator.js)

This task mimicked the process of sending push notifications to different phone numbers, and tracking the progress of each message sent.
Using `Kue`, we create a queue named `push_notification_code_2` (previous tasks also implemented this design), and create jobs that will be processed by a [job processor](7-job_processor.js). The creator will log the job creation or any errors that come about, but the processor will then log the completion or error of the job being processed.


Here is a portion of the job creator functionality:

```
jobs.forEach((jobData, index) => {
    const job = queue.create('push_notification_code_2', jobData)
        .save((err) => {
            if (err) {
                console.error(`Failed to create job: ${err}`);
            } else {
                console.log(`Notification job created: ${job.id}`);
            }
        });

    // upon job completion
    job.on('complete', () => {
        console.log(`Notification job ${job.id} completed`);
    });

    // upon job failure
    job.on('failed', (err) => {
        console.error(`Notification job ${job.id} failed: ${err}`);
    });

    // progress tracker
    job.on('progress', (progress) => {
        console.log(`Notification job ${job.id} ${progress}% complete`);
    });
});
```

The jobs will be created and logged, as well as log it's progress as it is completed.
The processor will complete and log the progress of each job, here is a portion of its functionality:

```
    function sendNotification(phoneNumber, message, job, done) {
        // set progress to 0
        job.progress(0, 100);

        if (blacklist.includes(phoneNumber)) {
            const error = new Error(`Phone number ${phoneNumber} is blacklisted`);
            job.failed().error(error);
            done(error);
        } else {
            setTimeout(() => {
                // updateprogress
                job.progress(50, 100);
                console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

                done();
            }, 1000) // 1 second delay
        }
    }
```
This code also featured blacklisted values that won't be processed. 

### Usage:
In **Terminal 1**:

```
$ npm run dev 7-job_processor.js 

```

In **Terminal 2**:

```
$ npm run dev 7-job_creator.js

> queuing_system_in_js@1.0.0 dev
> nodemon --exec babel-node --presets @babel/preset-env 7-job_creator.js
...

Notification job created: 27
Notification job created: 28
Notification job created: 29
...

```

**Terminal 1** will track the completion of the jobs with 7-job_processor.js:

```
Sending notification to 4153518743, with message: This is the code 4321 to verify your account
Sending notification to 4153538781, with message: This is the code 4562 to verify your account
...
```

While **Terminal 2** will log the progress and completion of the jobs it created:

```
Notification job 28 failed: Phone number 4153518781 is blacklisted
Notification job 29 0% complete
Notification job 30 0% complete
Notification job 29 50% complete
...
```

&nbsp;
---
&nbsp;

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
