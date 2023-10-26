import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { SiteMenuComponent } from './site-menu.component';

describe('SiteMenuComponent', () => {
  let component: SiteMenuComponent;
  let fixture: ComponentFixture<SiteMenuComponent>;

  const fakeSvgIconRegistryService = jasmine.createSpyObj(['loadSvg']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteMenuComponent],
      imports: [AngularSvgIconModule],
      providers: [
        {
          provide: SvgIconRegistryService,
          useValue: fakeSvgIconRegistryService,
        },
      ],
    });

    fixture = TestBed.createComponent(SiteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SiteMenuComponent', () => {
    expect(component).toBeTruthy();
  });
});
