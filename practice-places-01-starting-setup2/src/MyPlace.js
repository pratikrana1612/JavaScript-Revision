import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
console.log(queryParams);

const coords = {
  lat: parseFloat(queryParams.get("lat")),
  lng: +queryParams.get("lng"),
};
const address = queryParams.get("address");
const loadplace = new LoadedPlace(coords, address);

// for mongodb database
// const locId = queryParams.get("location");
// fetch("http://localhost:3000/location/" + locId)
//   .then((response) => {
//     if (response.statusCode === 404) {
//       throw new Error("Location not found");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     new LoadedPlace(data.coordinates, data.address);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
