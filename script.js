const weatherBlock = document.querySelector("#weather");

 function getWeather() {
    const select = document.getElementById('select');
    const city = select.value;
    const API_KEY = '71cd29172858c1aa8d37ea57473d5557';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          console.log(data);
            const location = data.name;
            const country = data.sys.country;
            const coordLon = data.coord.lon;
            const coordLat = data.coord.lat;
            const temp = Math.round(data.main.temp);
            const tempMin = Math.round(data.main.temp_min);
            const tempMax = Math.round(data.main.temp_max);
            const feelsLike = Math.round(data.main.feels_like);
            const wind = data.wind.speed;
            const status = data.weather[0].main;
            const icon = data.weather[0].icon;
            const countryCode = `${country}`;
            const flagUrl = `https://flagcdn.com/w160/${countryCode.toLowerCase()}.png`;
            weatherBlock.innerHTML = `
                <div class="weather__header">
                    <div class="weather__main">
                        <div class="weather__city">
                          ${location} 
                          <img class="country__flag" src="${flagUrl}" alt="${countryCode}" />
                        </div>
                        <div class="weather__status">${status}</div>
                        <div class="weather__coord">
                          <span>lon: ${coordLat}</span>
                          <span>lat: ${coordLon}</span>
                        </div>
                    </div>
                    <div class="weather__icon">
                        <img src="http://openweathermap.org/img/w/${icon}.png" alt="${icon}">
                    </div>
                </div>
                <div class="weather__box">
                  <div class="weather__metric">
                      <div class="weather__temp"><i class="fa-solid fa-temperature-half"></i> ${temp}</div>
                      <div class="weather__temp-min">Min: ${tempMin}</div>
                      <div class="weather__temp-max">Max: ${tempMax}</div>
                      <div class="weather__feels-like">Feels like: ${feelsLike}</div>
                  </div>
                  <div class="weather__wind">
                    <div class="weather__wind-speed"><i class="fa-solid fa-wind"></i> ${wind} m/s</div>
                  </div>
                </div>  
            `
    })
    .catch(error => {
      console.error(error);
    });  
}
getWeather()
setInterval(()=>{
  getWeather()
}, 15000)

const API_URL_PRESIDENTS = `https://api.sampleapis.com/presidents/presidents`;
    fetch(API_URL_PRESIDENTS)
        .then(response => response.json())
        .then(info => {
          info.forEach(el => {
            let photoUrl = el.photo;
              if (el.id === 2) { 
                photoUrl = './img/lossy-page1-274px-JQA_Photo.tif.jpg';
              }
            document.getElementById('presidents').insertAdjacentHTML('beforeend', `
              <div class="cards">
                <div class="card__name">
                  <h4>${el.id}.President: ${el.name}</h4>
                </div>
                <div class="card__yers">
                  <p>Years of government: ${el.yearsInOffice}</p>
                </div>
                <div class="card__vice">
                  <p>Vice President: ${el.vicePresidents[0]}</p>
                </div>
                <div class="card__photo">
                <img class="card__img" src="${photoUrl}"></img>
                </div>
              </div> 
              `)
          });
        })