import {Component, OnInit} from '@angular/core';
import {AuthService} from '@core/features/auth/services/auth/authService';
import {TranslationService} from '@core/features/translation/services/translation/translationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'UIVersion2';

  constructor(
    private translationService: TranslationService,
    private authService: AuthService<unknown>
  ) {
    this.authService.initializeAuth();
  }

  ngOnInit(): void {
    this.translationService.setDefaultLanguage('tr-TR');
    this.translationService.setLanguage('tr-TR');
  }
}
