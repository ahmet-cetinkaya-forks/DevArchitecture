import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '@core/shared/services/toast/toastService';
import {Observable, Subject} from 'rxjs';
import {Language} from '../../models/language';
import {LanguagesService} from '../../services/languages/languages.service';
import {TranslationService} from '../../services/translation/translationService';

@Component({
  templateUrl: './languages-dashboard-page.component.html',
  styleUrls: ['./languages-dashboard-page.component.scss'],
})
export class LanguagesDashboardPageComponent implements OnInit {
  languages!: Language[];
  isShowFormDialog!: boolean;
  languageForm!: FormGroup;
  languageToUpdate?: Language;
  isLoading!: boolean;
  isSaving!: boolean;

  constructor(
    private languageService: LanguagesService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.getLanguages();
  }

  getLanguages(): void {
    this.isLoading = true;
    this.languageService.getList().subscribe(response => {
      this.languages = response;
      this.isLoading = false;
    });
  }

  openCreate() {
    delete this.languageToUpdate;
    this.createForm();
    this.isShowFormDialog = true;
  }

  createForm(): void {
    if (!this.languageForm) {
      this.languageForm = this.formBuilder.group({
        name: [this.languageToUpdate?.name || '', [Validators.required]],
        code: [this.languageToUpdate?.code || '', [Validators.required]],
      });
    } else {
      this.languageForm.markAsUntouched();
      this.languageForm.reset();
      this.languageForm.patchValue({
        name: this.languageToUpdate?.name || '',
        code: this.languageToUpdate?.code || '',
      });
    }
  }

  openEdit(language: Language) {
    this.getById(language.id).subscribe(() => {
      this.createForm();
      this.isShowFormDialog = true;
    });
  }

  getById(id: number): Observable<void> {
    const subject = new Subject<void>();
    this.languageService.getById(id).subscribe(response => {
      this.languageToUpdate = response;
      subject.next();
    });
    return subject.asObservable();
  }

  save() {
    this.languageForm.markAllAsTouched();
    if (this.languageForm.invalid) return;

    this.isSaving = true;
    if (this.languageToUpdate) this.update();
    else this.create();
  }

  create(): void {
    const language: Language = {
      ...this.languageForm.value,
    };

    this.languageService.add(language).subscribe({
      next: response => {
        this.getLanguages();
        this.translationService.get(response).subscribe(responseText => {
          this.toastService.showToast('success', responseText, '');
        });
        this.isShowFormDialog = false;
      },
      complete: () => {
        this.isSaving = false;
      },
    });
  }

  update(): void {
    const language: Language = {
      id: this.languageToUpdate?.id,
      ...this.languageForm.value,
    };

    this.languageForm.get('name')!.touched;

    this.languageService.update(language).subscribe({
      next: () => {
        this.getLanguages();
        this.translationService.get('Updated').subscribe(updatedText => {
          this.toastService.showToast('success', updatedText, '');
        });
        this.isShowFormDialog = false;
      },
      complete: () => {
        this.isSaving = false;
      },
    });
  }

  confirmDelete(language: Language) {
    this.translationService
      .get('DeleteConfirm')
      .subscribe(deleteConfirmText => {
        this.translationService.get('Delete').subscribe(deleteText => {
          this.toastService
            .showConfirmDialog('warn', deleteText, deleteConfirmText)
            .subscribe(result => {
              if (!result) return;

              this.delete(language);
            });
        });
      });
  }

  delete(language: Language) {
    this.isLoading = true;
    this.languageService.delete(language.id).subscribe({
      next: () => {
        this.translationService.get('Deleted').subscribe(deletedText => {
          this.toastService.showToast('success', deletedText, '');
        });
        this.getLanguages();
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  hideDialog() {
    this.isShowFormDialog = false;
  }

  isValid(controlName: string): boolean {
    return (
      this.languageForm.get(controlName)!.touched &&
      this.languageForm.get(controlName)!.invalid
    );
  }
}
