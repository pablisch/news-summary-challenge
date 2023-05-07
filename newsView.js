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
      headlineDiv.classList.add('headline');
      headlineDiv.innerHTML = `<img src="${data.image}" alt="">
      <h3>${data.title}</h3>
      <div class="info">
        <p class="section">${data.section}</p>
        <p class="date">${data.date}</p>
        <p class="byline">${data.byline}</p>
      </div>`;
      this.mainDiv.append(headlineDiv);
    })
  }
}

module.exports = NewsClient;