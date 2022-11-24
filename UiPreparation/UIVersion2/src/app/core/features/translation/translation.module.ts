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
import {LanguageSelectMenuComponent} from './components/language-select-menu/language-select-menu.component';
import {DropdownModule} from 'primeng/dropdown';
import {LanguagesDashboardPageComponent} from './pages/languages-dashboard-page/languages-dashboard-page.component';
import {TranslationRoutingModule} from './translation-routing.module';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {LanguagesService} from './services/languages/languages.service';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';

// export function HttpLoaderFactory(http: HttpClient) { // if you want to use i18n, uncomment this block and install @ngx-translate/http-loader
//   return new TranslateHttpLoader(http, '../../../../assets/i18n/', '.json');
// }

const primeNgModules = [
  DropdownModule,
  TableModule,
  ToolbarModule,
  DialogModule,
  ButtonModule,
  InputTextModule,
];

@NgModule({
  declarations: [LanguageSelectMenuComponent, LanguagesDashboardPageComponent],
  imports: [
    CommonModule,
    TranslationRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        //useFactory:HttpLoaderFactory, // if you want use i18, use this instead useClass
        useClass: NgxTranslateService,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    ...primeNgModules,
  ],
  exports: [TranslateModule, LanguageSelectMenuComponent],
  providers: [
    {provide: TranslationService, useClass: NgxTranslateService},
    TranslateStore,
    LanguagesService,
  ],
})
export class TranslationModule {}
