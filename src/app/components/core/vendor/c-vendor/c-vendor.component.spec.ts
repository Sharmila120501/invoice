import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVendorComponent } from './c-vendor.component';

describe('CVendorComponent', () => {
  let component: CVendorComponent;
  let fixture: ComponentFixture<CVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CVendorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
