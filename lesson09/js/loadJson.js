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

