import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from "@angular/material"
import { MatSlideToggleModule } from "@angular/material"

import { MainService } from "../services/main.service";
import { DataStore } from '../shared/DataStore';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.scss']
})
export class MainpanelComponent implements OnInit {

  DataStore = DataStore;
  // article = null;

  constructor(public mainService: MainService) { }

  setMainArticle(artId) {    
    this.showArticle(artId);
  }

  showArticle(id) {
      this.mainService.setMainArticle(id).then(function(article) {
        // this.article = article;
      });
  }

  isArticleSelected(artId) {
      return DataStore.UI.selectedArticles.indexOf(artId) !== -1;
  }

  toggleSelectedState(artId) {
      console.log(artId);
      return this.mainService.toggleSelectedState(artId);
  }

  
  getActivePanelIndex() {
    console.log(DataStore.UI.mainpanel.selectedPanel);
    if (DataStore.UI.mainpanel.selectedPanel === "article") {
      return 0;
    }
    if (DataStore.UI.mainpanel.selectedPanel === "search") {
      return 1;
    }
    if (DataStore.UI.mainpanel.selectedPanel === "selected") {
      return 2;
    }
    return 1;
  }

  resetSelectedPanelState(index) {
    var statesArray = ['article', 'search', 'selected'];
    console.log('i', index);
    DataStore.UI.mainpanel.selectedPanel = statesArray[index] || null;
  }

  ngOnInit() {
  }

}
