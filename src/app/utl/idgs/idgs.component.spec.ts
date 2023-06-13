import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdgsComponent } from './idgs.component';

describe('IdgsComponent', () => {
  let component: IdgsComponent;
  let fixture: ComponentFixture<IdgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdgsComponent]
    });
    fixture = TestBed.createComponent(IdgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
