import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAwardsComponent } from './dialog-awards.component';

describe('DialogAwardsComponent', () => {
  let component: DialogAwardsComponent;
  let fixture: ComponentFixture<DialogAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAwardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
