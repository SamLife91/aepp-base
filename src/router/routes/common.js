import { merge } from 'lodash-es';
import { checkLoggedIn } from '../utils';
import AddressBook from '../../pages/AddressBook.vue';
import AddressBookNew from '../../pages/AddressBookNew.vue';
import AddressBookChoose from '../../pages/AddressBookChoose.vue';

export default [{
  name: 'address-book',
  path: '/addresses',
  component: AddressBook,
  beforeEnter: checkLoggedIn(true),
}, {
  name: 'address-book-new',
  path: '/addresses/new',
  component: AddressBookNew,
  beforeEnter: checkLoggedIn(true),
}, {
  name: 'address-book-choose',
  path: '/addresses/choose/:redirectPathTemplate',
  component: AddressBookChoose,
  beforeEnter: checkLoggedIn(true),
  props: true,
}].map(route => merge(route, { meta: { displayFooter: true } }));
