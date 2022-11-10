import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarreComponent } from './carre/carre.component';
import { Carre1Component } from './carre/carre1/carre1.component';
import { Carre2Component } from './carre/carre2/carre2.component';
import { Carre3Component } from './carre/carre3/carre3.component';
import { Carre4Component } from './carre/carre4/carre4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarreComponent,
    Carre1Component,
    Carre2Component,
    Carre3Component,
    Carre4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
