import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePracticeComponent } from './create-practice.component';

describe('CreatePracticeComponent', () => {
  let component: CreatePracticeComponent;
  let fixture: ComponentFixture<CreatePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
