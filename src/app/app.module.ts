import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import {MdMenuModule} from '@angular2-material/menu';

import { AppComponent } from './app.component';
import { UwHeaderComponent } from './uw-header/uw-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UwHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
