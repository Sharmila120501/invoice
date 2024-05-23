import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCompanyComponent } from './l-company.component';

describe('LCompanyComponent', () => {
  let component: LCompanyComponent;
  let fixture: ComponentFixture<LCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
