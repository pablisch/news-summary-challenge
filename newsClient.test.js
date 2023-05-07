const Client = require('./newsClient');

require('jest-fetch-mock').enableMocks();

describe('NewsClient class', () => {

  let client;
  let mockData;
  let mockLoadData;

  beforeEach(() => {
    fetch.resetMocks();
    client = new Client();
    mockData = {
      response: {
        status: 'ok',
        results: [
          {
            sectionName: 'Sport',
            webPublicationDate: '2023-05-05T17:44:04Z',
            webUrl:
              'https://www.theguardian.com/sport/2023/may/05/steve-smith-first-ashes-warm-up-with-sussex-undone-by-josh-tongue-glamorgan',
            fields: {
              headline:
                'Steve Smiths first Ashes warm-up with Sussex undone by sharp Tongue',
              byline: 'Ali Martin at New Road',
              thumbnail:
                'https://media.guim.co.uk/f7fd05eb0ed7226d01fa928ed42d50cfcc542f71/624_74_3318_1991/500.jpg',
            },
          },
        ],
      },
    }
    mockLoadData = fetch.mockResponseOnce(JSON.stringify(mockData));
  });

  test('calls fetch and loads data', async () => {
    mockLoadData;

    const dataFromApi = await client.loadHeadlines();

    // console.log(`data = ${JSON.stringify(dataFromApi[0])}`); // VISIBILITY

    expect(dataFromApi[0].section).toEqual("Sport");
    expect(dataFromApi[0].title).toEqual("Steve Smiths first Ashes warm-up with Sussex undone by sharp Tongue");
    expect(dataFromApi[0].byline).toEqual("Ali Martin at New Road");
    expect(dataFromApi[0].image).toEqual("https://media.guim.co.uk/f7fd05eb0ed7226d01fa928ed42d50cfcc542f71/624_74_3318_1991/500.jpg");
    expect(dataFromApi[0].date).toEqual("2023-05-05T17:44:04Z");
    expect(dataFromApi[0].url).toEqual("https://www.theguardian.com/sport/2023/may/05/steve-smith-first-ashes-warm-up-with-sussex-undone-by-josh-tongue-glamorgan");
    expect(mockLoadData).toHaveBeenCalledTimes(1);
  });
});