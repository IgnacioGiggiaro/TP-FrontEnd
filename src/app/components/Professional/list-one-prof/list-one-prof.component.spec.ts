import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneProfComponent } from './list-one-prof.component';

describe('ListOneProfComponent', () => {
  let component: ListOneProfComponent;
  let fixture: ComponentFixture<ListOneProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOneProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOneProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
