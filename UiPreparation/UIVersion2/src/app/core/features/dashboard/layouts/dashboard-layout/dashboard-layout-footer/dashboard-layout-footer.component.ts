import {Component, OnInit} from '@angular/core';
import {LayoutService} from '@core/features/dashboard/services/layout/layout.service';

@Component({
  selector: 'd-dashboard-layout-footer',
  templateUrl: './dashboard-layout-footer.component.html',
  styleUrls: ['./dashboard-layout-footer.component.scss'],
})
export class DashboardLayoutFooterComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
