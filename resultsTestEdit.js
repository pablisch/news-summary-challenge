const result = {
  response: {
    status: 'ok',
    results: [
      {
        id: 'sport/2023/may/05/steve-smith-first-ashes-warm-up-with-sussex-undone-by-josh-tongue-glamorgan',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2023-05-05T17:44:04Z',
        webTitle:
          'Steve Smiths first Ashes warm-up with Sussex undone by sharp Tongue',
        webUrl:
          'https://www.theguardian.com/sport/2023/may/05/steve-smith-first-ashes-warm-up-with-sussex-undone-by-josh-tongue-glamorgan',
        apiUrl:
          'https://content.guardianapis.com/sport/2023/may/05/steve-smith-first-ashes-warm-up-with-sussex-undone-by-josh-tongue-glamorgan',
        fields: {
          headline:
            'Steve Smiths first Ashes warm-up with Sussex undone by sharp Tongue',
          byline: 'Ali Martin at New Road',
          thumbnail:
            'https://media.guim.co.uk/f7fd05eb0ed7226d01fa928ed42d50cfcc542f71/624_74_3318_1991/500.jpg',
        },
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
    ],
  },
}

const results = result.response.results;

console.log(result.json());

// console.log(results.map(item => item.webTitle))

// console.log(result.response.results)
