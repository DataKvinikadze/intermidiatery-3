let absoluteImg = document.querySelector(".absolute");
let locationImg = document.querySelector(".location");
let degreeImg = document.querySelector(".img2");
let faranhite = document.querySelector(".farenhite");
let degree = document.querySelector(".degree");
let windImg = document.querySelector(".windImg");
let windContent = document.querySelector(".wind_content");
let latitudeInput = document.querySelector(".lat_content");
let LongtitudeInput = document.querySelector(".long_content");

windImg.src = "./photos/windimg.svg";

let url =
  "https://api.open-meteo.com/v1/forecast?latitude=33.753746&longitude=-84.386330&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m";

fetch(url, { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    latitudeInput.textContent = `Latitude: ${data.latitude} `;
    LongtitudeInput.textContent = `Logtitude: ${data.longitude} `;
    degree.textContent = data.current.temperature_2m;
    faranhite.textContent = `°F ${Math.round(
      data.current.temperature_2m * 1.8 + 32
    )}`;
    windContent.textContent = data.current.wind_speed_10m;

    if (data.current.is_day === 1) {
      absoluteImg.src = "./photos/absolute.svg";
    } else if (data.current.is_day === 0) {
      absoluteImg.src = "./photos/night.svg";
    }

    if (data.current.temperature_2m <= 1) {
      degreeImg.src = "photos/snow.svg";
    } else if (data.current.temperature_2m <= 10) {
      degreeImg.src = "photos/rain.svg";
    } else if (data.current.temperature_2m <= 30) {
      degreeImg.src = "photos/uni.svg";
    } else if (data.current.temperature_2m > 30) {
      degreeImg.src = "photos/sunny.svg";
    }
  });
