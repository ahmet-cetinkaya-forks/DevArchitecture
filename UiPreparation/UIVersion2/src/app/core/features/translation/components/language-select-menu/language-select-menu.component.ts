import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Language} from '../../models/language';
import {TranslationService} from '../../services/translation/translationService';

@Component({
  selector: 'd-language-select-menu',
  templateUrl: './language-select-menu.component.html',
  styleUrls: ['./language-select-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectMenuComponent implements OnInit {
  languages: Language[];

  constructor(private translationService: TranslationService) {
    this.languages = [
      {
        id: 1,
        name: 'Türkçe',
        code: 'tr-TR',
      },
      {
        id: 2,
        name: 'English',
        code: 'en-EN',
      },
    ];
  }

  ngOnInit(): void {}

  setLanguage(event: any) {
    const language: Language = event.value;
    this.translationService.setLanguage(language.code);
  }
}
