const Client = require('./NewsClient');
const Model = require('./NewsModel');
const View = require('./NewsView');

let client;
let model;
let view;

describe('NewsView class', () => {
  beforeEach(() => {
    client = new Client;
    model = new Model;
    view = new View(model, client);
  })
  test('returns', () => {

  });
});