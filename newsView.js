class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainDiv = document.querySelector('#headlines');
    this.searchButtonEl = document.querySelector('#search-button')
    this.searchInputEl = document.querySelector('#search-input')
    this.searchString = ""

    this.searchButtonEl.addEventListener('click', () => {
      this.searchString = this.searchInputEl.value;
      console.log(this.searchString);
      this.displayHeadlines(this.searchString);
      this.searchString = "";
      this.searchInputEl.value = "";
    })
  }

  async displayHeadlines(searchString) {
    this.clearPage();
    const news = await this.client.loadHeadlines(searchString);
    console.log(`news = ${news}`)
    this.model.setHeadlines(news);
    const newsData = this.model.getHeadlines();
    console.log(`newsData = ${newsData}`)
    
    this.displayPage(newsData);
  }

  displayPage(newsData) {
    newsData.forEach((data) => {
      const headlineDiv = document.createElement('div');
      headlineDiv.classList.add('headline-box');
      headlineDiv.innerHTML = `<a href="${data.url}" target="_blank" class="img-vs-text">
      <img class="image" src="${data.image}" alt="">
      <div class="text">
      <h2>${data.title}</h2>
      <div class="info">
        <p class="section">Grauniad ${data.section}</p>
        <p class="small">${data.date.split("T")[0]}</p>
        <p class="small">${data.byline}</p>
      </div></div></a>`;
      this.mainDiv.append(headlineDiv);
    })
  }

  clearPage() {
    const headlines = document.querySelectorAll('.headline-box');
    headlines.forEach((div) => {
      div.remove()
    })
  }
}

module.exports = NewsView;