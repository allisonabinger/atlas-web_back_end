const kue = require('kue');
const queue = kue.createQueue();

// blacklisted numbers
const blacklist = ['4153518780', '4153518781']

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

// processes 2 jobs at a time
queue.process('push_notification_code_2', 2, (job, done) => {
    const { phoneNumber, message } = job.data;

    sendNotification(phoneNumber, message, job, done);
});

// adding queue error event listener
queue.on('error', (err) => {
    console.error('Queue error:', err);
});
