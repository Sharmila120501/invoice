import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioComponent } from './transactio.component';

describe('TransactioComponent', () => {
  let component: TransactioComponent;
  let fixture: ComponentFixture<TransactioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
