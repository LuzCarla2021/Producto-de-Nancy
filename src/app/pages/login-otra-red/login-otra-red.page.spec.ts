import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginOtraRedPage } from './login-otra-red.page';

describe('LoginOtraRedPage', () => {
  let component: LoginOtraRedPage;
  let fixture: ComponentFixture<LoginOtraRedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOtraRedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
