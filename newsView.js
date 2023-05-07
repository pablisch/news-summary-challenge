class NewsClient {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainDiv = document.querySelector('#headlines');
    this.searchButtonEl = document.querySelector('#search-button')
    this.searchInputEl = document.querySelector('#search-input')
  }
}

module.exports = NewsClient;