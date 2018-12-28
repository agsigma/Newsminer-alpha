import { Component, OnInit } from '@angular/core';
import { MainService } from "../services/main.service";

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchterm = "gibraltar";

  constructor(public mainService: MainService) { }

  onSearchFormChange($event) {
    this.searchterm = $event.target.value;
    console.log($event, this.searchterm);    
  }

  onSearchFormSubmit($event) {    
    console.log($event, this.searchterm);    
    var res = this.mainService.getArticlesByRegex(this.searchterm).catch(() => alert('Error occured'));
    console.log(res);
    // res.then(console.log);
    // $event.PreventDefault();
    // return false;
  }

  ngOnInit() {
  }

}
