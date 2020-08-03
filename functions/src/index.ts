import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request: functions.https.Request, response: functions.Response<any>) => {
  response.send('Hello from Firebase!\n\n');
});

// functions.