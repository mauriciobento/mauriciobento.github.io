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
    const requestURL = '/json/staff.json';
    alert(requestURL)
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
