import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJistComponent } from './about-jist.component';

describe('AboutJistComponent', () => {
  let component: AboutJistComponent;
  let fixture: ComponentFixture<AboutJistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
