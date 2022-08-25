import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TranslateLoader, TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {TranslationService} from '../translationService';

@Injectable()
export class NgxTranslateService
  extends TranslationService
  implements TranslateLoader
{
  private apiUrl = `${environment.apiUrl}/translates/languages`;

  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {
    super();
  }

  getTranslation(lang: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${lang}`);
  }

  get(key: string): Observable<string> {
    return this.translateService.get(key);
  }

  setDefaultLanguage(lang: string): void {
    this.translateService.setDefaultLang(lang);
  }

  setLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
