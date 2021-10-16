import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/general/about/about.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ServiceComponent } from './modules/general/service/service.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { RealisationComponent } from './modules/general/realisation/realisation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'realisation', component: RealisationComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
