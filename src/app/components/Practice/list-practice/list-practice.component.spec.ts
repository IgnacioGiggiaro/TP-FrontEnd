import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPracticeComponent } from './list-practice.component';

describe('ListPracticeComponent', () => {
  let component: ListPracticeComponent;
  let fixture: ComponentFixture<ListPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
