import { Component, OnInit } from '@angular/core';
import { DataStore } from '../shared/DataStore';
import { MainService } from "../services/main.service";

import { MatSlideToggleModule, MatListModule, MatIconModule, MatCardModule } from "@angular/material"
// import {  } from "@angular/material/too"

import { DecimalPipe } from '@angular/common'

@Component({
  selector: 'app-mostsimilar',
  templateUrl: './mostsimilar.component.html',
  styleUrls: ['./mostsimilar.component.scss']
})
export class MostsimilarComponent implements OnInit {

  DataStore = DataStore;

  constructor(public mainService: MainService) { }

  setMainArticle(artId) {
      this.mainService.setMainArticle(artId)
  }


  isArticleSelected(artId) {
    return DataStore.UI.selectedArticles.indexOf(artId) !== -1;
  }

  toggleSelectedState(artId) {
      console.log(artId);
      return this.mainService.toggleSelectedState(artId);
  }


  ngOnInit() {
  }

}
