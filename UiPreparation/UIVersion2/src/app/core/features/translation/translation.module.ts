import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {NgxTranslateService} from './services/translation/ngx-translate/ngx-translate.service';
import {TranslationService} from './services/translation/translationService';

// export function HttpLoaderFactory(http: HttpClient) { // if you want to use i18n, uncomment this block and install @ngx-translate/http-loader
//   return new TranslateHttpLoader(http, '../../../../assets/i18n/', '.json');
// }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        //useFactory:HttpLoaderFactory, // if you want use i18, use this instead useClass
        useClass: NgxTranslateService,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [
    {provide: TranslationService, useClass: NgxTranslateService},
    TranslateStore,
  ],
})
export class TranslationModule {}
