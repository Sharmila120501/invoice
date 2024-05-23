import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LVoucherComponent } from './l-voucher.component';

describe('LVoucherComponent', () => {
  let component: LVoucherComponent;
  let fixture: ComponentFixture<LVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LVoucherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
