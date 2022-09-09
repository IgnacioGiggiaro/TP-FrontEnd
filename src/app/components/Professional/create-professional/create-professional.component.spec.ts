import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfessionalComponent } from './create-professional.component';

describe('CreateProfessionalComponent', () => {
  let component: CreateProfessionalComponent;
  let fixture: ComponentFixture<CreateProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
