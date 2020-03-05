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
