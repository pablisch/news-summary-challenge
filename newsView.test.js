const Client = require('./newsClient');
const Model = require('./newsModel');
const View = require('./newsView');

let client;
let model;
let view;

describe('NewsView class', () => {
  beforeEach(() => {
    client = new Client();
    model = new Model();
    view = new View(model, client);
  })
  test('returns', () => {

  });
});