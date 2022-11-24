import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageSelectMenuComponent} from './language-select-menu.component';

describe('LanguageSelectMenuComponent', () => {
  let component: LanguageSelectMenuComponent;
  let fixture: ComponentFixture<LanguageSelectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSelectMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
