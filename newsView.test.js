/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const Client = require('./newsClient');
const Model = require('./newsModel');
const View = require('./newsView');
jest.mock('./newsClient');

let client;
let model;
let view;

describe('NewsView class', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new Model();
    client = new Client();
    view = new View(model, client);
    madeUpData1 = [{
      section: "Fake news",
      title: "Nothing is real",
      byline: "Them",
      image: "No image",
      date: "Today",
      url: "My name is Url",
    }];
    madeUpData2 = [{
      section: "Fake news",
      title: "Nothing is real",
      byline: "Them",
      image: "No image",
      date: "Today",
      url: "My name is Url",
    },
    {
      section: "My news",
      title: "Life is beautiful",
      byline: "Me",
      image: "Imagination",
      date: "Right now",
      url: "My name is not Url",
    }];
  })

  test('displayPage renders data to index.html #1', () => {
    view.displayPage(madeUpData1);
    expect(document.querySelectorAll('h2').length).toBe(1)
    expect(document.querySelectorAll('h2')[0].textContent).toEqual("Nothing is real")
    expect(document.querySelectorAll('.section')[0].textContent).toEqual("Grauniad Fake news")
  });

  test('displayPage renders data to index.html #2', () => {
    view.displayPage(madeUpData2);
    expect(document.querySelectorAll('h2').length).toBe(2)
    expect(document.querySelectorAll('h2')[1].textContent).toEqual("Life is beautiful")
    expect(document.querySelectorAll('.image')[1].src).toEqual("http://localhost/Imagination")
  });

  xtest('displayHeadlines calls functions and renders index.html #1', async () => {
    const results = await view.displayHeadlines();
    console.log(`results = ${results} in test`)
    expect(document.querySelectorAll('h2').length).toBe(2)
    expect(document.querySelectorAll('h2')[1].textContent).toEqual("Life is beautiful")
    expect(document.querySelectorAll('.image')[1].src).toEqual("http://localhost/Imagination")
  });
});

