class NewsClient {
  async loadHeadlines() {
    console.log("mock file is running") // VISIBILITY
    return Promise.resolve([
      {
          section: headline.sectionName,
          title: headline.fields.headline,
          byline: headline.fields.byline,
          image: headline.fields.thumbnail,
          date: headline.webPublicationDate,
          url: headline.webUrl,
        
      },
    ])
  }
}

module.exports = NewsClient;
