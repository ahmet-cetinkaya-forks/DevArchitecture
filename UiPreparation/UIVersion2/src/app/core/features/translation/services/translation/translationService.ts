import {Observable} from 'rxjs';

export abstract class TranslationService {
  abstract getTranslation(lang: string): Observable<any>;
  abstract setDefaultLanguage(lang: string): void;
  abstract setLanguage(lang: string): void;
}
