import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardLayoutMenuComponent} from './dashboard-layout-menu.component';

describe('DashboardLayoutMenuComponent', () => {
  let component: DashboardLayoutMenuComponent;
  let fixture: ComponentFixture<DashboardLayoutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLayoutMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
