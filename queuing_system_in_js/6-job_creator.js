import kue from 'kue';
import { v4 as uuidv4 } from 'uuid';

const queue = kue.createQueue();
const jobData = {
    phoneNumber: '+1234567890',
    message: 'Hello from Kue!'
}

const job = queue.create('push_notification_code', jobData);

// enqueue is fired when the job is successfully enqueued in the queue
job.on('enqueue', () => {
    console.log(`Notification job created: ${job.id}`);
});

// complete is fired when job is successfully processed
job.on('complete', () => {
    console.log('Notification job completed');
});

// failed is fired when job does not process successfully
job.on('failed', () => {
    console.log('Notification job failed');
});

job.save();


// adding queue error event listener
queue.on('error', (err) => {
    console.error('Queue error:', err);
});
