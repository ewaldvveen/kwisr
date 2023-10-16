import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavBarComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
