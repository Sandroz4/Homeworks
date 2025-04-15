import { openDB } from 'idb';

const dbPromise = openDB('authDB', 1, {
  upgrade(db) {
    db.createObjectStore('users', { keyPath: 'username' });
  }
});

export async function addUser(user) {
  const db = await dbPromise;
  return db.add('users', user);
}

export async function getUser(username) {
  const db = await dbPromise;
  return db.get('users', username);
}
