const apiKey = 'test'; // 👈🏻 THE test API KEY
// const apiKey = require('./apiKey'); // 👈🏻 THE REAL API KEY

class NewsClient {
  async loadHeadlines(searchString) {
    const newsUrl = `https://content.guardianapis.com/search?q=${searchString}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
    // console.log(newsUrl) // VISIBILITY
    try {
      const response = await fetch(newsUrl); // 👈🏻 THE REAL FETCH REQUEST
      // const response = await fetch('./newsSample.js'); // 👈🏻 THE TEST FETCH REQUEST

      if (response.status === 404) { // check if response.status is 404
        throw new Error(`All that was found was disappointment - status ${response.status}`) // throw new error with response.status
      } else if (response.status === 500) {
        throw new Error(`Server Error - status ${response.status}`) // Alternative error
      } else if (!response.ok) { // any other error
        throw new Error(`Computer says no: ${response.status}`) // throw new error with response.status
      }

      const data = await response.json();
      
      console.log(`Data returned from client is ${data.response.results[0].sectionName}`)
      return data;

    } catch(error) {
      throw new Error(`Network is sleeping: ${error.message}`);
    }
  }
}


module.exports = NewsClient;

