import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactJistComponent } from './contact-jist.component';

describe('ContactJistComponent', () => {
  let component: ContactJistComponent;
  let fixture: ComponentFixture<ContactJistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactJistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactJistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
