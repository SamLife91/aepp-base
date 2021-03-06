/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["state"] }] */

import { genRandomBuffer } from '../utils';

export default {
  state: {
    peerId: Buffer.from(genRandomBuffer(15)).toString('base64'),
    remoteConnected: false,
    transactionToSignByRemote: null,
    ledgerConnected: false,
    ledgerSupported: false,
    ledgerAccountNumber: 1,
    ledgerAddresses: [],
    showSidebar: false,
  },

  getters: {
    addresses: ({ ledgerConnected, ledgerAddresses }, getters, { addresses }) => (
      ledgerConnected ? ledgerAddresses : addresses),
    loggedIn: ({ ledgerConnected, remoteConnected }) => ledgerConnected || remoteConnected,
    ableToCreateAccount: ({ ledgerConnected }) => ledgerConnected,
    signingCancelable: ({ ledgerConnected }) => !ledgerConnected,
  },

  mutations: {
    createAccount(state) {
      if (state.ledgerConnected) {
        state.ledgerAccountNumber += 1;
      }
    },
    setRemoteConnected(state, remoteConnected) {
      state.showSidebar = false;
      state.remoteConnected = remoteConnected;
    },
    setTransactionToSign(state, transaction) {
      state.transactionToSignByRemote = transaction;
    },
    cancelTransaction() {},
    setLedgerConnected(state, ledgerConnected) {
      state.showSidebar = false;
      state.ledgerConnected = ledgerConnected;
      if (!ledgerConnected) {
        state.ledgerAddresses = [];
      }
    },
    setLedgerSupported(state, ledgerSupported) {
      state.ledgerSupported = ledgerSupported;
    },
    addLedgerAddress(state, ledgerAddress) {
      state.ledgerAddresses.push(ledgerAddress);
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },

  actions: {
    async signTransaction({ commit }, args) {
      let result;
      try {
        result = await new Promise((resolve, reject) => commit('setTransactionToSign', { resolve, reject, args }));
      } finally {
        commit('setTransactionToSign');
      }
      return result;
    },
  },
};
