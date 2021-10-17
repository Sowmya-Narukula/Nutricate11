import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcornerComponent } from './studentcorner.component';

describe('StudentcornerComponent', () => {
  let component: StudentcornerComponent;
  let fixture: ComponentFixture<StudentcornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
