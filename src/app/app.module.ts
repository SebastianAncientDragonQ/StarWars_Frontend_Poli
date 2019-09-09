import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';

import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PrincipalHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [MatToolbarModule] 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
