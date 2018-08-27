const webPush = require('web-push');

// const vapidKeys = webPush.generateVAPIDKeys();

webPush.setVapidDetails(
  'mailto:denis_davidyuk@hotmail.com',
  'BPWDqAALTpshUcuzP4LHFy_4rNtMXkhJ5m5zBYDN0LMj3vVQs9LSMoiZWixVrMAFUcw_uzQGX2vgmvpBZkAq0GE', // vapidKeys.publicKey
  '4lWjYEh1BbVO_xcsnTrwbpp1vj86-qEobo7ceogN_Xw', // vapidKeys.privateKey
);

const subscription = JSON.parse('{"endpoint":"https://fcm.googleapis.com/fcm/send/fRoM_kwvFYI:APA91bGCBaVccVHJTdQHiF-Z85qXfV9KqqsaxiduMWltFJE3ciF39qWWvuEPNrDzDNEgMT3-UM1KLUM77hc1DuSrgj0tBohUW4J9ydXrKe1wkLlQ2XnYQLvP4WrWj0MzAWiPTRJ5Vmo4","expirationTime":null,"keys":{"p256dh":"BMJYxDxcgyLBOZkcISQTV3f6aL1X9KbA9H-wWFxZjow6RK0nwwXb47CWqZkSsvRMP3Jnh97G42EtwF7LCKk2K6s","auth":"8BqIqsv5vHF2lmcYGT9F8A"}}');

webPush.sendNotification(subscription, 'test message').catch(console.error);
