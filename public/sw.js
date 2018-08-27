/* global self */

console.log('sw start');

const initWebSocket = () => {
  let i = 0;
  console.log('initWebSocket');
  const socket = new WebSocket('ws://192.168.1.126:6060/', 'echo-protocol');
  socket.onopen = () => {
    setInterval(() => {
      socket.send(`test ${i += 1}`);
      // console.log(`test ${i}`);
    }, 1000);
  };
  socket.onerror = console.error;
  socket.onclose = console.log.bind(null, 'on close');
};

initWebSocket();

console.log('middle');

self.addEventListener('push', (event) => {
  console.log(event.data.text());
  initWebSocket();

  // event.waitUntil(self.registration.showNotification(event.data.text(), {
  //   body: event.data.text(),
  // }));
});

console.log('sw end');
