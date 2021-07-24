import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
/**
 * The main app module
 */
export class AppModule {}
