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

  unpackData(data) {
    const headlinesArray = data.response.results.map(headline => { 
        return {
          section: headline.sectionName,
          title: headline.fields.headline,
          byline: headline.fields.byline,
          image: headline.fields.thumbnail,
          date: headline.webPublicationDate,
          url: headline.webUrl,
        };
    });
    console.log(headlinesArray)
      return headlinesArray
  }
}

module.exports = NewsModel;