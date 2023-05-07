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
    console.log(news)
  }
}

module.exports = NewsClient;