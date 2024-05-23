import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LVendorComponent } from './l-vendor.component';

describe('LVendorComponent', () => {
  let component: LVendorComponent;
  let fixture: ComponentFixture<LVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LVendorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
