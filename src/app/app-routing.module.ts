import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CommercialComponent } from './components/commercial/commercial.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  {
    path: 'apartment', component: ApartmentComponent
  },
  {
    path: 'commercial', component: CommercialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
