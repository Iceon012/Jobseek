import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadjobimgComponent } from './uploadjobimg.component';

describe('UploadjobimgComponent', () => {
  let component: UploadjobimgComponent;
  let fixture: ComponentFixture<UploadjobimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadjobimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadjobimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
