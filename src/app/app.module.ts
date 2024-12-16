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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MegaMenu,
    BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule,
    Menubar,
    MenubarModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
