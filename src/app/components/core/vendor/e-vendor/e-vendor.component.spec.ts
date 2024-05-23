import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVendorComponent } from './e-vendor.component';

describe('EVendorComponent', () => {
  let component: EVendorComponent;
  let fixture: ComponentFixture<EVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EVendorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
