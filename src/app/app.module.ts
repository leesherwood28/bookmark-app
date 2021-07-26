import { NgModule } from '@angular/core';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageProviderService } from './core/store/local-storage-provider.service';
import { PersistStorageProviderService } from './core/store/persist-storage-provider.service';
import { HeaderModule } from './shared/header/header.module';

const defaultMatFormFieldOptions: MatFormFieldDefaultOptions = {
  appearance: 'fill',
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: defaultMatFormFieldOptions,
    },
    {
      provide: PersistStorageProviderService,
      useClass: LocalStorageProviderService,
    },
  ],
  bootstrap: [AppComponent],
})
/**
 * The main app module
 */
export class AppModule {}
