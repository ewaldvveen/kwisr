import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, FeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
