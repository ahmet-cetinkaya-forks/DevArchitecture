import {Component, OnInit} from '@angular/core';
import {LayoutService} from '@core/features/dashboard/services/layout/layout.service';
import {translationDashboardMenuItems} from '@core/features/translation/translation-routing.module';
import {featuresDashboardMenuItems} from '@features/dashboard/dashboard-routing.module';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'd-dashboard-layout-menu',
  templateUrl: './dashboard-layout-menu.component.html',
  styleUrls: ['./dashboard-layout-menu.component.scss'],
})
export class DashboardLayoutMenuComponent implements OnInit {
  model: MenuItem[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      ...featuresDashboardMenuItems,
      {
        label: 'Management',
        items: [...translationDashboardMenuItems],
      },
    ];
  }
}
