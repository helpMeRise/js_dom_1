
const div = document.querySelector(`.app`);


// Массив объектов с адресами изображений и подписями для карточек
const cardsInfo = [
  {
    url: "images/1.jpg",
    title: "Подпись 1",
  },
  {
    url: "images/2.jpg",
    title: "Подпись 2",
  },
  {
    url: "images/3.jpg",
    title: "Подпись 3",
  },
  {
    url: "images/4.jpg",
    title: "Подпись 4",
  },
  {
    url: "images/5.jpg",
    title: "Подпись 5",
  },
  {
    url: "images/6.jpg",
    title: "Подпись 6",
  },
  {
    url: "images/7.jpg",
    title: "Подпись 7",
  },
  {
    url: "images/8.jpg",
    title: "Подпись 8",
  },
]

const toPage = () => {

  const list = document.createElement(`ul`);  // Создаю, настриваю и добавляю список ul внутрь дива
  div.append(list);
  list.style = `
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  `;

  for ( i = 0; i < cardsInfo.length; i++ ) { //Цикл для создания того количества карточек, данные для скольких хранятся в массиве
    
    const card = document.createElement(`li`);  // Создаю, настриваю и добавляю элементы списка li внутрь списка ul
    list.append(card);
    card.style = `
      display: flex;
      flex-direction: column;
      gap: 25px;
      width: 400px;
      height: 400px;
    `

    const image = document.createElement(`img`); // Создаю, настриваю и добавляю изображения в карточки, используя url хранящиеся в массиве
    image.setAttribute(`src`, `${cardsInfo[i].url}`)
    image.style.height = `300px`;
    card.append(image);

    const title = document.createElement(`h2`); // Создаю, настриваю и добавляю подписи в карточки, используя данные из массива
    title.textContent = `${cardsInfo[i].title}`
    title.style.alignSelf = `center`;
    card.append(title);
  }

}

toPage();