import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryJistComponent } from './gallery-jist.component';

describe('GalleryJistComponent', () => {
  let component: GalleryJistComponent;
  let fixture: ComponentFixture<GalleryJistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryJistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryJistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
