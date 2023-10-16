import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule, LayoutModule } from './core';
import { FeaturesModule } from './features/features.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, FeaturesModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
