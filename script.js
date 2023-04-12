
const API_URL_PRESIDENTS = 'https://api.sampleapis.com/presidents/presidents';
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