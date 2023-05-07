class NewsModel {
  constructor() {
    this.headlines = [];
  }

  setHeadlines(data) {
    this.headlines = data;
    // console.log(this.headlines) //VISIBILITY
  }

  getHeadlines() {
    return this.headlines;
  }
}

module.exports = NewsModel;