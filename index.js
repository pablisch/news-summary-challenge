const Client = require('./NewsClient');
const Model = require('./NewsModel');
const View = require('./NewsView');


const client = new Client;
const model = new Model;
const view = new View(model, client);

view.displayHeadlines();