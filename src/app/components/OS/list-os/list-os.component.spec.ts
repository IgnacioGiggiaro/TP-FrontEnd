import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOSComponent } from './list-os.component';

describe('ListOSComponent', () => {
  let component: ListOSComponent;
  let fixture: ComponentFixture<ListOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
