# News Summary Design

## From user stories

=> page with headlines
=> image to go with each headline
=> Headlines link to main article
=> search functionality

## Classes

NewsClient:
```
> getNews # headlines, article or search depending on parameters
# may require extra method depending on how arguments are handled
```
NewsModel:
```
> constructor: 
this.headlines # array for headlines
this.article # article object ???
> setHeadlines # takes response from API and feeds into headline array
> getHeadlines # returns headline array
> setArticle # takes a response from API and feeds into article object ???
> getArticle # returns article object
> reset # to empty article list ???
```
NewsView:
```
> constructor:
this.searchButtonEl
this.searchInputEl
this.model
this.client
this.newsContainerEl
buttonEventListener
> displayHeadlines
> displayArticle
> clearNews
> displayError ???
> clearSearch # clears search field after search
```

