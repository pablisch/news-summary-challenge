

const Client = require('./client');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {

    const client = new Client();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    client.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);

      done();
    });
  });
});

const Client = require('./client');
require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data', async () => {
    const client = new Client();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    const returnedDataFromApi = await client.loadData();

    expect(returnedDataFromApi.name).toBe("Some value");
    expect(returnedDataFromApi.id).toBe(123);
  });
});

