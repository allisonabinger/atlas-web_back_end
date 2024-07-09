import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job';

const queue = kue.createQueue();

describe('createPushNotificationsJobs', () => {

    // utilizing testMode, Kue doesn't connect to Redis but operates in memory
    before(() => {
        queue.testMode.enter();
    });

    afterEach(() => {
        queue.testMode.clear();
    });

    after(() => {
        queue.testMode.exit();
    });

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

          setTimeout(() => {
            try {
                expect(queue.testMode.jobs.length).to.equal(2);
                expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
                done();
            } catch (error) {
                done(error);
            }
        }, 500);
    })
})
