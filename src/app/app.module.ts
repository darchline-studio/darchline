import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for PrimeNG
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
// import { PrimeNGConfig } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { MegaMenu } from 'primeng/megamenu';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { Image, ImageModule } from 'primeng/image';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { LoaderComponent } from './components/loader/loader.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CommercialComponent } from './components/commercial/commercial.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    LoaderComponent,
    OurTeamComponent,
    CarouselComponent,
    ContactUsComponent,
    ApartmentComponent,
    CommercialComponent
  ],
  imports: [
    MegaMenu,
    Carousel,
    Tag,
    Image,
    ImageModule,
    BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule,
    Menubar,
    MenubarModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
