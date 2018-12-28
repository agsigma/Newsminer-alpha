import { Injectable } from '@angular/core';
import { DataStore } from '../shared/DataStore';
import { of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MainService {

  ARTICLES: object = null;

  getArticlesByRegex(string) {
    var err;
    var regExp;
    if (!string || string.length < 2) {
      alert('Search term too short');
      return Promise.reject(null);
    }
    try {
      regExp = new RegExp(string, 'igm');
    } catch(err) {
      alert('getArticlesByRegex   ' + err.toString());
      return Promise.reject(null);
    }
    // pobranie z serwera, zapisanie do bazy, zaktualizowanie listy idkow w DataStore.UI
   
    var result = new Promise((resolve, reject) => {
        resolve( 
          Object.values(DataStore.data.articles)
          .filter(art => regExp.test(art.meta.description))
          .map(art => art.id) 
        );
    });    

    DataStore.UI.mainpanel.selectedPanel = "search";

    result.then((idsArray: Array<any>) => {
        DataStore.UI.searchResults = idsArray;
    });

    return result;
  }

  // getArticle(id) {
  //   var result = new Promise((resolve, reject) => {
  //     resolve( DataStore.data.articles[id] || null );
  //   });   

  //   DataStore.UI.mainArticle = null;
  //   DataStore.UI.mainpanel.selectedPanel = "article";

  //   result.then(article => DataStore.UI.mainArticle = article) || null;
  //   return result; 
  // }

  fetchArticle(id) {
    return fetch('../db/'+id+'.txt').then(response => {
      return response.text().then((articleText) => {
        console.log(articleText);
        DataStore.data.articles[id].meta.text = articleText;
        return DataStore.data.articles[id];
      })
    })
  }

  setMainArticle(id) {
    var result = new Promise((resolve, reject) => {
      if (DataStore.data.articles[id].text) {
        resolve( DataStore.data.articles[id] );
      } else {
        // console.log(this.fetchArticle);
        this.fetchArticle(id).then( articleData => resolve(articleData) );
      }
    });   
    
    DataStore.UI.mainArticle = null;
    DataStore.UI.mainpanel.selectedPanel = "article";

    result.then(article => DataStore.UI.mainArticle = article) || null;
    return result; 
  }

  toggleSelectedState(artId) {
    var artIndex = DataStore.UI.selectedArticles.findIndex(lArtId => lArtId === artId);
    DataStore.UI.selectedArticlesHasChanged = true;
    console.log(artIndex)
    if (artIndex === -1) {
      DataStore.UI.selectedArticles.push(artId);
      return true;
    } else {
      DataStore.UI.selectedArticles.splice(artIndex, 1);
      return false;
    }
  }

  constructor() { 
    // this.ARTICLES = DataStore.data.articles;
    // window.DataStore = DataStore;
    fetch('../db/tmp.json').then(response => {
      response.json().then((articlesData) => {
        // console.log(articlesData);
        // usuwamy puste artykuly
        var art;
        for (art of Object.values(articlesData)) {
          // console.log(art);
          if (art && art.meta && art.meta.entities) {
            DataStore.data.articles[art.id] = art;
          }
        }        
      })
    })
  }
}
