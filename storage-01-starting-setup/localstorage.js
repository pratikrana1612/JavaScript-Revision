const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const user = {
  name: "Pratik",
  age: 19,
  hobbies: ["wala"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("Uid", "2123");
  localStorage.setItem("user", JSON.stringify(user));
});
retrieveBtn.addEventListener("click", () => {
  const value2 = localStorage.getItem("Uid");
  const value = JSON.parse(localStorage.getItem("user"));
  console.log(value || "not exist");
  console.log(value2 || "not exist");
});
