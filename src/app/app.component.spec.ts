import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SvgIconRegistryService } from 'angular-svg-icon';

import { LayoutModule } from './core/components/layout/layout.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './features/question/question.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, QuestionComponent],
      imports: [HttpClientTestingModule, LayoutModule],
      providers: [{ provide: SvgIconRegistryService, useValue: {} }],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
