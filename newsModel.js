class NewsModel {
  constructor() {
    this.headlines = [];
  }

  setHeadlines(data) {
    this.headlines = data;
  }

  getHeadlines() {
    return this.headlines;
  }
}

module.exports = NewsModel;