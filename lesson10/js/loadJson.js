function buildCards() {
    const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const prophets = jsonObject['prophets'];
            for (let i = 0; i < prophets.length; i++ ) {
                let card = document.createElement('section');
                let p = document.createElement('p');
                let h2 = document.createElement('h2');
                let image = document.createElement('img');

                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                card.appendChild(h2);

                p.textContent = 'Date of Birth: ' + prophets[i].birthdate;
                card.appendChild(p);

                p = document.createElement('p');
                p.textContent = 'Place of Birth: ' + prophets[i].birthplace;
                card.appendChild(p);

                image.setAttribute('src', prophets[i].imageurl);
                image.setAttribute('alt', prophets[i].name+' '+prophets[i].lastname+' - '+prophets[i].order);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        });
}

function buildTowns() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const town = jsonObject['towns'];
            for (let i = 0; i < town.length; i++ ) {
                if (town[i].name == "Fish Haven" || town[i].name =="Preston"|| town[i].name == "Soda Springs" ) {
                    let card = document.createElement('section');
                    let p = document.createElement('p');
                    let h2 = document.createElement('h2');
                    let h4 = document.createElement('h3');
                    let image = document.createElement('img');
                    let div = document.createElement('div');

                    h2.textContent = town[i].name;
                    div.appendChild(h2);

                    h4.textContent = town[i].motto;
                    div.appendChild(h4);

                    p = document.createElement('p');
                    p.textContent = 'Year Founded: ' + town[i].yearFounded;
                    div.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = 'Population: ' + town[i].currentPopulation;
                    div.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = 'Annual Rainfall: ' + town[i].averageRainfall;
                    div.appendChild(p);

                    card.appendChild(div);

                    image.setAttribute('src', "images/" +town[i].photo);
                    image.setAttribute('alt', town[i].name);
                    card.appendChild(image);

                    document.querySelector('div.towns').appendChild(card);
                }
            }
        });
}

function buildSummary() {
    const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c73430d28283f1ebe85f9416db4bed88';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const api = jsonObject.list[0];
            document.getElementById('current').textContent = api.weather[0].main;
            document.getElementById('temperature').textContent = api.main.temp_max.toFixed(0);
            document.getElementById('humidity').textContent = api.main.humidity;
            document.getElementById('windSpeed').textContent = api.wind.speed.toFixed(0);

            const currentDay = new Date().getDay();
            const weekday= [];
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";

            let count = currentDay;
            const forecast = jsonObject.list;
            for (let i = 0; i < forecast.length; i++) {
                if (forecast[i].dt_txt.includes("18:00:00")) {
                    if(count == 7){
                        count = 0;
                    }
                    let h4 = document.createElement('h4');
                    let div = document.createElement('div');
                    let image = document.createElement('img');
                    let p = document.createElement('p');

                    h4.textContent = weekday[count];
                    div.appendChild(h4);

                    let icon = forecast[i].weather[0].icon;
                    image.setAttribute('src', 'https://openweathermap.org/img/w/' + icon + '.png');
                    image.setAttribute('alt', forecast[i].weather[0].description);
                    div.appendChild(image);

                    p.textContent = forecast[i].main.temp.toFixed(0)+' F';
                    div.appendChild(p);

                    document.querySelector('div.five-day').appendChild(div);
                    count++;
                }
            }

        });
}
