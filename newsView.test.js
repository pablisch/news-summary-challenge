/**
 * @jest-environment jsdom
 */

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();
jest.mock('./newsClient');

const fs = require('fs');
const Client = require('./newsClient');
const Model = require('./newsModel');
const View = require('./newsView');

let mockClient;
let model;
let view;

describe('NewsView class', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    Client.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
    mockClient = {
      loadHeadlines: jest.fn()
    };
    model = new Model();
    view = new View(model, mockClient);
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

  // test('displayHeadlines calls functions and renders index.html #1', () => {
  //   view.displayHeadlines();
    // expect(document.querySelectorAll('h2').length).toBe(2)
    // expect(document.querySelectorAll('h2')[1].textContent).toEqual("Life is beautiful")
    // expect(document.querySelectorAll('.image')[1].src).toEqual("http://localhost/Imagination")
  // });
});





//   test('shows headlines returned from api', async () => {
//     const model = new Model();
    // const mockClient = {
    //   loadData: jest.fn()
    // };

//     mockClient.loadData.mockResolvedValueOnce(madeUpData1);

//     const view = new View(model, mockClient);
//     await view.loadArticles();
//     const divs = document.querySelectorAll('p.article-title');
//     expect(divs.length).toEqual(2);
//   });

//   test.only('it returns listings for specific search term', async () => {
//     const model = new Model();
//     const mockClient = {
//       loadData: jest.fn()
//     };

//     mockClient.loadData.mockResolvedValueOnce(madeUpData2);  

//     const view = new View(model, mockClient);

//     const searchInput = document.querySelector('#search-bar');
//     searchInput.value = 'football';
//     const searchButton = document.querySelector('#search-button');
//     searchButton.dispatchEvent(new Event('click'));

//     await new Promise(resolve => setTimeout(resolve, 1000));
//     const divs = document.querySelectorAll('p.article-title');
//     expect(divs.length).toEqual(2);
//     console.log(divs[0]);
//     expect(divs[0].textContent).toEqual('Football news 1');
//     expect(divs[0].textContent).toEqual('Football news 2');

//   })
// })