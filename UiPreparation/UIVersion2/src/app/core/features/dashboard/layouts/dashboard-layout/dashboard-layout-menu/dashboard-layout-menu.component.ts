import {Component, OnInit} from '@angular/core';
import {LayoutService} from '@core/features/dashboard/services/layout/layout.service';
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
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard'],
          },
        ],
      },
      {
        label: 'Header',
        items: [
          {
            label: 'Sub Menu 1',
            icon: 'pi pi-fw pi-id-card',
          },
        ],
      },
      {
        label: 'Hierarchy',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                  {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                  {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                ],
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [{label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'}],
              },
            ],
          },
        ],
      },
    ];
  }
}
