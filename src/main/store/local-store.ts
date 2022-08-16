import localforage from "localforage";

const localStore = localforage.createInstance({
  name: "QR restaurant",
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
});

export default localStore;
