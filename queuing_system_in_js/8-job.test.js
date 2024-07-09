import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job';

const queue = kue.createQueue();

describe('createPushNotificationsJobs', () => {
    afterEach((done) => {
        queue.shutdown(5000, (err) => {
            if (err) return done(err);
            done();
        })
    })

    it('display an error message if jobs is not an array', (done) => {
        try {
            createPushNotificationsJobs(null, queue); 
        } catch (error) {
            expect(error.message).to.equal('Jobs is not an array');
            done();
        }
    });

    it('create two new jobs to the queue', (done) => {
        const jobs = [
            {
                phoneNumber: '4153518780',
                message: 'This is the code 1234 to verify your account'
            },
            {
                phoneNumber: '4153518781',
                message: 'This is the code 4562 to verify your account'
            }
        ];
        createPushNotificationsJobs(jobs, queue);
        queue.process('push_notification_code_3', 2, () => {});

        setTimeout(() => {
            expect(queue.testMode.jobs.length).to.equal(2);
            done();
        }, 5000);
    });
})
