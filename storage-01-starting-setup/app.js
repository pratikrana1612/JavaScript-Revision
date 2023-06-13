// const { request } = require("http");

const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

let db;
const dbRequest = indexedDB.open("storageDummy", 1);
dbRequest.onsuccess = (event) => {
  db = event.target.result;
};
dbRequest.onupgradeneeded = (event) => {
  db = event.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });
  objStore.transaction.oncomplete = function (event) {
    const prodcutsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    prodcutsStore.add({
      id: "p1",
      title: "A First Product",
      price: 123,
      tax: ["yes", "no"],
    });
  };
};
dbRequest.onerror = (event) => {
  console.log("erro");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const prodcutsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
    prodcutsStore.add({
        id: "p2",
        title: "A second Product",
        price: 1232,
        tax: ["yes", "no"],
    });
});
retrieveBtn.addEventListener("click", () => {
    const prodcutsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    const request=prodcutsStore.get('p1')
    request.onsuccess=function(){
        console.log(request.result)
    }
});
