function buildSummary() {
    const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4092267&units=imperial&APPID=c73430d28283f1ebe85f9416db4bed88';
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

        });
}

function buildCards() {
    const requestURL = 'https://mauriciobento.github.io/final/json/staff.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            for (let i = 0; i < jsonObject.length; i++ ) {
                let card = document.createElement('section');
                let p = document.createElement('p');
                let h2 = document.createElement('h2');
                let image = document.createElement('img');

                h2.textContent = jsonObject[i].firstname + ' ' + jsonObject[i].lastname;
                card.appendChild(h2);

                p.textContent = 'Title: ' + jsonObject[i].title;
                card.appendChild(p);

                p = document.createElement('p');
                p.textContent = 'Years of experience: ' + jsonObject[i].yearsofexperience;
                card.appendChild(p);

                p = document.createElement('p');
                p.textContent = 'Certification level: ' + jsonObject[i].certificationlevel;
                card.appendChild(p);

                p = document.createElement('p');
                p.textContent = 'Email: ' + jsonObject[i].email;
                card.appendChild(p);

                p = document.createElement('p');
                p.textContent = 'About me: ' + jsonObject[i].biography;
                card.appendChild(p);

                image.setAttribute('src', jsonObject[i].imageurl);
                image.setAttribute('alt', jsonObject[i].firstname+' '+jsonObject[i].lastname);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        });
}
