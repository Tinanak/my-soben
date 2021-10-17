import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './modules/general/about/about.component';
import { FooterComponent } from './modules/general/footer/footer.component';
import { HomeComponent } from './modules/general/home/home.component';
import { HeaderComponent } from './modules/general/header/header.component';
import { ServiceComponent } from './modules/general/service/service.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { RealisationComponent } from './modules/general/realisation/realisation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    RealisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
