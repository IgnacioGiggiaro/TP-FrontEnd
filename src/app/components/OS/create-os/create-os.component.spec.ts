import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOSComponent } from './create-os.component';

describe('CreateOSComponent', () => {
  let component: CreateOSComponent;
  let fixture: ComponentFixture<CreateOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
