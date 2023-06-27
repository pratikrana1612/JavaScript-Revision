export class Map {
  constructor(coords) {
    this.coords = coords;
    this.render(coords);
  }

  render(coords) {
    // if (!google) {
    //   alert("Don't have the map");
    //   return;
    // }
    let map = L.map("map").setView(coords, 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
      maxZoom: 40,
    }).addTo(map);

    console.log(coords)
    L.marker(coords).addTo(map)
    .bindPopup("It's your current location")
    .openPopup();

    // L.marker([51.5, -0.09]).addTo(map)
    // Add a tile layer from OpenStreetMap

    // const map = new google.maps.Map(document.getElementById("map"), {
    //   center: coords,
    //   zoom: 16,
    // });

    // new google.maps.Marker({
    //   position: coords,
    //   map: map,
    // });
  }
}
