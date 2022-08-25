import {Component, ElementRef, OnInit} from '@angular/core';
import {LayoutService} from '@core/features/dashboard/services/layout/layout.service';

@Component({
  selector: 'd-dashboard-layout-sidebar',
  templateUrl: './dashboard-layout-sidebar.component.html',
  styleUrls: ['./dashboard-layout-sidebar.component.scss'],
})
export class DashboardLayoutSidebarComponent implements OnInit {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}

  ngOnInit(): void {}
}
