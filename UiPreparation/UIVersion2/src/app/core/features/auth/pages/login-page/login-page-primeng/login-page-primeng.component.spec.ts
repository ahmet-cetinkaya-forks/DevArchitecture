import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginPagePrimengComponent} from './login-page-primeng.component';

describe('LoginPagePrimengComponent', () => {
  let component: LoginPagePrimengComponent;
  let fixture: ComponentFixture<LoginPagePrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPagePrimengComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPagePrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
