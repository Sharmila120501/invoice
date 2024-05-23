import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECompanyComponent } from './e-company.component';

describe('ECompanyComponent', () => {
  let component: ECompanyComponent;
  let fixture: ComponentFixture<ECompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ECompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ECompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
