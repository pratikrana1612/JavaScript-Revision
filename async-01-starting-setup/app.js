const button = document.querySelector("button");
const output = document.querySelector("p");

function getLocation(opt) {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (suc) => resolve(suc),
      (error) => reject(error),
      opt
    );
  });
  return promise;
}
function setTimer(duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
}

async function trackUserHandler() {
  // try {
  //   let posData = await getLocation();
  //   let timerData = await setTimer(2000);
  //   console.log(posData, timerData);
  // } catch (error) {
  //   console.log(error)
  // }
  getLocation()
    .then((data) => {
      posData = data;
      return setTimer(2000);
    })
    .catch((error) => {
      console.log(error);
      return "on we go";
    })
    .then((data) => console.log(posData, data));

  setTimeout(() => {
    console.log("timer done");
  }, 0);
  console.log("fadf");
}

button.addEventListener("click", trackUserHandler);

Promise.race([getLocation(), setTimer(1000)]).then(data =>{
  console.log(data)
})
Promise.all([getLocation(), setTimer(1000)]).then(data =>{
  console.log(data)
})
Promise.allSettled([getLocation(), setTimer(1000)]).then(data => console.log(data))
// let result=0
// for (let i = 0; i < 100000000; i++) {
//   //  console.log(i)
//   result+=i
// }

// // console.log(result)
// for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }
