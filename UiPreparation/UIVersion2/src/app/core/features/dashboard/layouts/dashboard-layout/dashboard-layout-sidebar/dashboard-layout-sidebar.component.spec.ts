import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardLayoutSidebarComponent} from './dashboard-layout-sidebar.component';

describe('DashboardLayoutSidebarComponent', () => {
  let component: DashboardLayoutSidebarComponent;
  let fixture: ComponentFixture<DashboardLayoutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLayoutSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
