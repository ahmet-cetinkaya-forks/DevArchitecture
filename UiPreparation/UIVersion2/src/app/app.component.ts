import {Component, OnInit} from '@angular/core';
import {TranslationService} from '@core/features/translation/services/translation/translationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'UIVersion2';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.setDefaultLanguage('tr-TR');
    this.translationService.setLanguage('tr-TR');
  }
}
