const kue = require('kue');
const queue = kue.createQueue();

function createPushNotificationsJobs(jobs, queue) {
    if (!Array.isArray(jobs)) {
        throw new Error('Jobs is not an array');
    }

    jobs.forEach((jobData) => {
        const job = queue.create('push_notification_code_3', jobData);

        job.on('complete', () => {
            console.log(`Notification job ${job.id} completed`);
        });

        job.on('failed', (err) => {
            console.log(`Notification job ${job.id} failed: ${err}`);
        });

        job.on('progress', (progress, total) => {
            console.log(`Notification job ${job.id} ${progress}% complete`);
        });
        
        job.save((err) => {
            if (err) {
                console.error(`Error creating job ${job.id}: ${err}`);
            } else {
                console.log(`Notification job created ${job.id}`);
            }
        });
    });
}

// adding queue error event listener
queue.on('error', (err) => {
    console.error('Queue error:', err);
});

export default createPushNotificationsJobs;
