import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutModule } from 'src/app/core/components/layout/layout.module';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionComponent],
      imports: [LayoutModule],
    });
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the QuestionComponent', () => {
    expect(component).toBeTruthy();
  });
});
