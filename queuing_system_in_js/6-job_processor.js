import kue from 'kue';
const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

// processes jobs from the queue
queue.process('push_notification_code', (job, done) => {
    const { phoneNumber, message } = job.data;
    sendNotification(phoneNumber, message);
    done();
});

// adding queue error event listener
queue.on('error', (err) => {
    console.error('Queue error:', err);
});
