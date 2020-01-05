import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClinetModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipes';
import { StarComponent } from './shared/star.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent,ProductListComponent,ConvertToSpacesPipe, StarComponent ], //this is the declaration so that respecvie component can locate its html selector. All components that we add must be declared   imports: [BrowserModule],
  imports: [BrowserModule,FormsModule,HttpClinetModule],
  bootstrap: [AppComponent] // this is the starting component to start
})
export class AppModule { }
