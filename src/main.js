import Vue from 'vue';
import Router from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate';
import { focus } from 'vue-focus';
import './lib/initEnv';
import App from './App.vue';
import router from './router';
import store from './store';
import webPush from 'web-push'

Validator.extend('min_value_exclusive', (value, [min]) => Number(value) > min);
Validator.extend('url_http', (value) => {
  try {
    const url = new URL((/^\w+:\//.test(value) ? '' : 'http://') + value);
    return ['http:', 'https:'].includes(url.protocol);
  } catch (e) {
    return false;
  }
});

Vue.use(Router);
Vue.use(VeeValidate, {
  dictionary: {
    en: {
      messages: {
        required: 'This field is required',
        min: (field, [length]) => `This field must be at least ${length} characters`,
        min_value: (field, [min]) => `This field must be ${min} or more`,
        min_value_exclusive: (field, [min]) => `This field must be more than ${min}`,
        max_value: (field, [max]) => `This field must be ${max} or less`,
        not_in: () => 'This field must be a valid value',
        decimal: () => 'This field must be numeric and may contain decimal points',
        url_http: () => 'This field is not a valid HTTP(S) URL',
        confirmed: () => 'The passwords do not match',
      },
    },
  },
});
Vue.directive('focus', focus);

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

Vue.config.productionTip = false;
Vue.prototype.$globals = {
  IS_MOBILE_DEVICE: process.env.IS_MOBILE_DEVICE,
};

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then((swReg) => {
      console.log('Service Worker is registered', swReg);
    })
    .catch((error) => {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
}

window.webPush = webPush;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

window.urlB64ToUint8Array = urlB64ToUint8Array;
