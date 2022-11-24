import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Language} from '../../models/language';

@Injectable()
export class LanguagesService {
  apiControllerUrl = `${environment.apiUrl}/languages`;

  constructor(private readonly httpClient: HttpClient) {}

  getList(): Observable<Language[]> {
    return this.httpClient.get<Language[]>(this.apiControllerUrl);
  }

  getById(id: number): Observable<Language> {
    return this.httpClient.get<Language>(`${this.apiControllerUrl}/${id}`);
  }

  add(language: Language): Observable<string> {
    return this.httpClient.post<string>(this.apiControllerUrl, language, {
      responseType: 'text' as 'json',
    });
  }

  update(language: Language): Observable<string> {
    return this.httpClient.put<string>(
      `${this.apiControllerUrl}/${language.id}`,
      language,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  delete(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.apiControllerUrl}/${id}`, {
      responseType: 'text' as 'json',
    });
  }
}
