import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// use transactions methods for indexdb
// logic for a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log("PUT to the database");

  // creates a connection to databse and the version
  const jateDb = await openDB("jate", 1);

  // creates a new read and write transaction to the database
  const tx = jateDb.transaction("jate", "readwrite");

  // opens up the specified object store (table/colllection)
  const store = tx.objectStore("jate");

  // updates the specified content
  const request = store.put({ id: id, jate: content });

  const result = await request;
  console.log("Data saved to the database", result);
  return result;
};

// logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // creates a connection to databse and the version
  const jateDb = await openDB("jate", 1);

  // creates a new read transaction to the database
  const tx = jateDb.transaction("jate", "readonly");

  // opens up the specified object store (table/colllection)
  const store = tx.objectStore("jate");

  // gets all the data in the database
  const request = store.getAll();

  // confirmation of the request
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
