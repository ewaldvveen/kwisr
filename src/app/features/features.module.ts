import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../core/components/layout/layout.module';

import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [QuestionComponent],
  imports: [CommonModule, LayoutModule],
  exports: [QuestionComponent],
})
export class FeaturesModule {}
