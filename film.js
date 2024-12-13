const sidebarWrapper = document.querySelector('.content-sidebar__info__wrapper');

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

renderSidebar(info);