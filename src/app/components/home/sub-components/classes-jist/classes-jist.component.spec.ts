import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesJistComponent } from './classes-jist.component';

describe('ClassesJistComponent', () => {
  let component: ClassesJistComponent;
  let fixture: ComponentFixture<ClassesJistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesJistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesJistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
