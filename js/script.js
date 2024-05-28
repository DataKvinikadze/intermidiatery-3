// adding image
let absoluteImg = document.querySelector(".absolute");
let locationImg = document.querySelector(".location");
let degreeImg = document.querySelector(".weatherImg");
let windImg = document.querySelector(".windImg");
let faranhite = document.querySelector(".farenhite");

// Content
let windContent = document.querySelector(".wind_content");
let latitudeInput = document.querySelector(".lat_content");
let LongtitudeInput = document.querySelector(".long_content");
let degree = document.querySelector(".degree");

// adding src
windImg.src = "./photos/windimg.svg";

// adding url

let url =
  "https://api.open-meteo.com/v1/forecast?latitude=73.753746&longitude=.386330&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m";

// fetching information

fetch(url, { method: "GET" })
  .then((response) => {
    // translating data
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // modifying input content
    latitudeInput.textContent = `Latitude: ${data.latitude} `;
    LongtitudeInput.textContent = `Logtitude: ${data.longitude} `;

    // adding temperature
    degree.textContent = data.current.temperature_2m;

    // converting celcius into faranhite
    faranhite.textContent = `°F ${Math.round(
      data.current.temperature_2m * 1.8 + 32
    )}`;

    // adding wind speed
    windContent.textContent = data.current.wind_speed_10m;

    // day / night
    if (data.current.is_day === 1) {
      absoluteImg.src = "./photos/absolute.svg";
    } else if (data.current.is_day === 0) {
      absoluteImg.src = "./photos/night.svg";
    }

    // weather

    if (data.current.temperature_2m < 1) {
      degreeImg.src = "./photos/snow.svg";
      console.log("I love bitches");
    } else if (data.current.temperature_2m <= 10) {
      degreeImg.src = "photos/bluddy.svg";
    } else if (data.current.temperature_2m <= 30) {
      degreeImg.src = "photos/Union.svg";
    } else if (data.current.temperature_2m > 30) {
      console.log("levan has 0 skill");
      degreeImg.src = "photos/Union.svg";
    }
  });
