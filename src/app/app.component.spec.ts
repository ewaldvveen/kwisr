import { TestBed } from '@angular/core/testing';

import { LayoutModule } from './core/components/layout/layout.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './features/question/question.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, QuestionComponent],
      imports: [LayoutModule],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
