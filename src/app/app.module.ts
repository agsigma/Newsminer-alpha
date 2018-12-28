import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MostsimilarComponent } from './mostsimilar/mostsimilar.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';

import { FormsModule } from '@angular/forms';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from "@angular/material"
import { MatSlideToggleModule, MatListModule, MatIconModule, MatCardModule } from "@angular/material"
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent, 
    MostsimilarComponent,
    MainpanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    NoopAnimationsModule,
    // BrowserAnimationsModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatListModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
