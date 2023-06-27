const GOOGLE_API_KEY = "AIzaSyAMn0m_QMqjlijAAZVcGknbjUfDLoom-U0";

export async function getAddressFromCoords(coords) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords[0]}&lon=${coords[1]}`);
    const data = await response.json();
    if (data) {
      const address = data.display_name;
      return address
    } else {
      alert("No results found for this coodinates.");
      return;
    }
  } catch (err) {
    throw new Error("Something went wrong");
    return;
  }
}
export async function getCoordsFromAddress(address) {
  try {
    const urlAddress = encodeURI(address);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${urlAddress}&format=json`
    );
    //   if (!response.ok) {
    //       console.log('fadfa')
    //     throw new Error("Failed to get coordinates please try again");
    //   }
    const data = await response.json();
    let coordinates;
    if (data.length > 0) {
      // if (data.error_message) {
      //   console.log("fadfads");
      //   throw new Error(data.error_message);
      // }
      console.log(data);
      const latitude = parseFloat(data[0].lat);
      const longitude = parseFloat(data[0].lon);
      coordinates = [latitude, longitude];
      return coordinates;
    } else {
      alert("No results found for the address.");
      return;
    }
  } catch (err) {
    throw new Error("Something went wrong");
    return;
  }

  //   const coordinates = data.result[0].geometry.location;
}
