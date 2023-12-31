import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { HeaderComponent } from './header.component';
import { SiteMenuComponent } from '@shared/components/site-menu/site-menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const fakeSvgIconRegistryService = jasmine.createSpyObj(['loadSvg']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, SiteMenuComponent],
      imports: [AngularSvgIconModule],
      providers: [
        {
          provide: SvgIconRegistryService,
          useValue: fakeSvgIconRegistryService,
        },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });
});
