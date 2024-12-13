const cardWrapper = document.querySelector('.content-cards');
const sidebarWrapper = document.querySelector('.content-sidebar__info__wrapper');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const films = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        genre: 'Фантастика, приключения',
        raiting: 7.8,
        link: '/film.html',
        image: './images/film.png'

    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        genre: 'Фантастика, приключения',
        raiting: 7.8,
        link: '/film.html',
        image: './images/film.png'

    },
    {
        id: 2,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        genre: 'Фантастика, приключения',
        raiting: 7.8,
        link: '/film.html',
        image: './images/film.png'

    },
    {
        id: 3,
        title: 'Марсианин 4',
        original: 'The Martian 2015',
        genre: 'Фантастика, приключения',
        raiting: 7.8,
        link: '/film.html',
        image: './images/film.png'

    },
    {
        id: 4,
        title: 'Марсианин 5',
        original: 'The Martian 2015',
        genre: 'Фантастика, приключения',
        raiting: 7.8,
        link: '/film.html',
        image: './images/film.png'

    },
    {
        id: 5,
        title: 'Марсианин 6',
        original: 'The Martian 2015',
        genre: 'Фантастика, приключения',
        raiting: 7.8,
        link: '/film.html',
        image: './images/film.png'

    },
]

const info = [
    {
        id: 0,
        title: 'Топ-250',
        desc: 'Подборка фильмов и сериалов с наивысшими оценками зрителей'
    },
    {
        id: 1,
        title: 'Посмеяться от души',
        desc: 'Подборка комедий, которые помогут расслабиться после работы'
    },
    {
        id: 2,
        title: 'Запутанный сюжет',
        desc: 'Триллеры и прключения с запутанным и интересным сюжетом. Невозможно оторваться!'
    },
]

const renderSidebar = (array) => {
    sidebarWrapper.innerHTML = '';

    array.forEach((item) => {
        sidebarWrapper.insertAdjacentHTML('beforeend', `
        <div class="content-sidebar__info__item">
            <h5>${item.title}</h5>
            <p>${item.desc}</p>
        </div>
        `)
    })
}

const renderCard = (array) => {
    cardWrapper.innerHTML = '';

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
        <a href="${item.link}" class="content-cards__item">
            <div class="content-cards__item--img">
                <img src="${item.image}" alt="film">
            </div>
            <div class="content-cards__item--title">
                <h5>${item.title}</h5>
                <p>${item.original}</p>
            </div>
            <p class="content-cards__item--description">
                ${item.genre}
            </p>
            <p class="content-cards__item--raiting">
                ${item.raiting}
            </p>
        </a>
            `)
    })
}

searchButton.addEventListener('click', () => {
    renderCard(films.filter((item) => item.title.includes(searchInput.value)));
});

renderSidebar(info);
renderCard(films);
