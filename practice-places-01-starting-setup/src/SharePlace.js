import { Modal } from "./UI/modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress, getAddressFromCoords } from "./Utility/location";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.querySelector("#locate-btn");
    this.sharedBtn = document.getElementById("share-btn");

    locateUserBtn.addEventListener(
      "click",
      this.getUserLocationHandler.bind(this)
    );
    this.sharedBtn.addEventListener("click", this.sharePlaceHandler);
    addressForm.addEventListener(
      "submit",
      this.getUserAddressHandler.bind(this)
    );
  }
  sharePlaceHandler() {
    const inputValue = document.getElementById("share-link");
    if (!navigator.clipboard) {
      inputValue.select();
      return;
    }
    navigator.clipboard
      .writeText(inputValue.value)
      .then((suc) => alert("copied into the clipboard"))
      .catch((err) => console.log(err));
  }
  selectPlace(coordinates, address) {
    if (this.map) {
      // this.map = new Map(coordinates);
      return;
      // this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
      // this.map.render()
    }
    this.sharedBtn.disabled = false;
    const inputValue = document.getElementById("share-link");
    inputValue.value = `${location.origin}/my-place?address=${encodeURI(
      address
    )}&lat=${coordinates[0]}&lng=${coordinates[1]}`;
  }
  getUserLocationHandler() {
    if (!navigator.geolocation) {
      alert("Location feature does not exist in your browser");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "loading location please wait"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        // const coordinates = {
        //   lat: successResult.coords.latitude,
        //   lng: successResult.coords.longitude,
        // };
        const coordinates = [
          successResult.coords.latitude,
          successResult.coords.longitude,
        ];
        console.log(coordinates);
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
        modal.hide();
      },
      (errorResult) => {
        modal.hide();
        alert("Please enter the address manually");
      }
    );
  }
  getUserAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;
    if (!address || address.trim().length == 0) {
      alert("invalid address");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "loading location please wait"
    );
    modal.show();
    getCoordsFromAddress(address)
      .then((coordinates) => {
        this.selectPlace(coordinates,address);
      })
      .catch((err) => alert(err));
    modal.hide();
  }
}

const palce = new PlaceFinder();
