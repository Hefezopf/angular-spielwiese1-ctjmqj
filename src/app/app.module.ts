import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewComponent } from './view/view.component';
import { DatenServiceService } from './service/daten-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ViewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DatenServiceService]
})
export class AppModule { }
