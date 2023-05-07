const Model = require('./newsModel');

let model;
let madeUpData1;
let madeUpData2;

describe('NewsModel class', () => {
  beforeEach(() => {
    model = new Model();
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

  test('it returns an empty array before data is loaded', () => {
    expect(model.getHeadlines()).toEqual([]);
  });

  test('it returns data when data is loaded #1', () => {
    model.setHeadlines(madeUpData1);
    expect(model.getHeadlines().length).toBe(1);
    expect(model.getHeadlines()[0].section).toEqual("Fake news");
    expect(model.getHeadlines()[0].title).toEqual("Nothing is real");
    expect(model.getHeadlines()[0].byline).toEqual("Them");
    expect(model.getHeadlines()[0].url).toEqual("My name is Url");
  });

  test('it returns data when data is loaded #2', () => {
    model.setHeadlines(madeUpData2);
    expect(model.getHeadlines().length).toBe(2);
    expect(model.getHeadlines()[0].section).toEqual("Fake news");
    expect(model.getHeadlines()[0].title).toEqual("Nothing is real");
    expect(model.getHeadlines()[0].byline).toEqual("Them");
    expect(model.getHeadlines()[0].url).toEqual("My name is Url");
    expect(model.getHeadlines()[1].title).toEqual("Life is beautiful");
    expect(model.getHeadlines()[1].image).toEqual("Imagination");
    expect(model.getHeadlines()[1].byline).toEqual("Me");
    expect(model.getHeadlines()[1].date).toEqual("Right now");
  });
});