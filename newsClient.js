const apiKey = 'test';

class NewsClient {
  async loadHeadlines() {
    const search = '';
    const newsUrl = `https://content.guardianapis.com/search?q=${search}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`

    try {
      const response = await fetch(newsUrl);
      if (!response.ok) {
        throw new Error(`Computer says no: ${response.status}`);
      }
      const data = await response.json();
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
      return headlinesArray
    } catch (error) {
      throw new Error(`Network is sleeping: ${error.message}`);
    }
  }
}

module.exports = NewsClient;

