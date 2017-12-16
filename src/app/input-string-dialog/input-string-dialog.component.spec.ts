import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStringDialogComponent } from './input-string-dialog.component';

describe('InputStringDialogComponent', () => {
  let component: InputStringDialogComponent;
  let fixture: ComponentFixture<InputStringDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStringDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
