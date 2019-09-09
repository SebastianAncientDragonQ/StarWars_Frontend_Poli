import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHomeComponent } from './principal-home.component';

describe('PrincipalHomeComponent', () => {
  let component: PrincipalHomeComponent;
  let fixture: ComponentFixture<PrincipalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
