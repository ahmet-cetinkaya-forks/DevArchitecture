import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/features/auth/services/auth/authService';
import {LayoutService} from '@core/features/dashboard/services/layout/layout.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'd-dashboard-layout-topbar',
  templateUrl: './dashboard-layout-topbar.component.html',
  styleUrls: ['./dashboard-layout-topbar.component.scss'],
})
export class DashboardLayoutTopbarComponent implements OnInit {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    public authService: AuthService<unknown>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
