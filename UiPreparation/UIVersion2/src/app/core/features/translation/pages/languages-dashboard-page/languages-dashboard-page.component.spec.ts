import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDashboardPageComponent } from './languages-dashboard-page.component';

describe('LanguagesDashboardPageComponent', () => {
  let component: LanguagesDashboardPageComponent;
  let fixture: ComponentFixture<LanguagesDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
