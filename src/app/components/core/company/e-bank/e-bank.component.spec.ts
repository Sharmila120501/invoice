import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBankComponent } from './e-bank.component';

describe('EBankComponent', () => {
  let component: EBankComponent;
  let fixture: ComponentFixture<EBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
