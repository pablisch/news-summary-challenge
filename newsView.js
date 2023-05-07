class NewsClient {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainDiv = document.querySelector('#headlines');
    this.searchButtonEl = document.querySelector('#search-button')
    this.searchInputEl = document.querySelector('#search-input')

    this.searchButtonEl.addEventListener('click', () => {
      let searchInput = this.searchInputEl.value;
      console.log(searchInput);
      this.searchInputEl.value = "";
    })
  }

  async displayHeadlines() {
    const news = await this.client.loadHeadlines();
    this.model.setHeadlines(news);
    const newsData = this.model.getHeadlines();
    // console.log(newsData);
    newsData.forEach((data) => {
      // console.log(data)
      const headlineDiv = document.createElement('div');
      headlineDiv.classList.add('headline-box');
      headlineDiv.innerHTML = `<div class="img-vs-text">
      <img src="${data.image}" alt="">
      <div class="text">
      <h2>${data.title}</h2>
      <div class="info">
        <p class="section">Grauniad ${data.section}</p>
        <p class="small">${data.date.split("T")[0]}</p>
        <p class="small">${data.byline}</p>
      </div></div></div>`;
      this.mainDiv.append(headlineDiv);
    })
  }
}

module.exports = NewsClient;