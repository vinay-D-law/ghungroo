import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJistComponent } from './hero-jist.component';

describe('HeroJistComponent', () => {
  let component: HeroJistComponent;
  let fixture: ComponentFixture<HeroJistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroJistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroJistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
