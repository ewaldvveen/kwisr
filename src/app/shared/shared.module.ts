import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteMenuComponent } from './components/site-menu/site-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [SiteMenuComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [SiteMenuComponent],
})
export class SharedModule {}
