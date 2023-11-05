const btn = document.getElementById("btn");
const country_container = document.getElementById("country-container");
const map = document.getElementById("map");

// c
//Geolocation API

const geo = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      map.innerHTML = `<iframe src="https://maps.google.com/maps/?q=${lat},${long}&z=15&output=embed" 
      width="100%" height="100% frameborder="0" style="border:0" allowfullscreen></iframe>`;

      getlocation(lat, long);
    });
  }
};

const getlocation = async (lat, long) => {
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/ipinfo?&apiKey=d96c0cd9148c490f9aa670c6406d4f60`
    );
    const data = await response.json();
    country_container.innerHTML = `
    <div class="content">
    <h2>Continent</h2>
    <p>${data.continent.name}</p>
  </div>
  <div class="region">
    <h2>Country</h2>
    <p>${data.country.name}</p>
  </div>
  <div class="street">
    <h2>State</h2>
    <p>${data.state.name}</p>
  </div>
  <div class="region">
    <h2>Country native name</h2>
    <p>${data.country.name_native}</p>
  </div>
    `;
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", geo);

//f8ec42feabb070f61a27d38fe80bd891
//https://api.geoapify.com/v1/ipinfo?&apiKey=d96c0cd9148c490f9aa670c6406d4f60
