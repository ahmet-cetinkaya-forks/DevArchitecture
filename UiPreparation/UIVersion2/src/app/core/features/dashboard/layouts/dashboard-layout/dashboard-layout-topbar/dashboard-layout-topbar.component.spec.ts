import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardLayoutTopbarComponent} from './dashboard-layout-topbar.component';

describe('DashboardLayoutTopbarComponent', () => {
  let component: DashboardLayoutTopbarComponent;
  let fixture: ComponentFixture<DashboardLayoutTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLayoutTopbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
