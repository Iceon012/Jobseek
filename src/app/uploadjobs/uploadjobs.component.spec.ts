import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadjobsComponent } from './uploadjobs.component';

describe('UploadjobsComponent', () => {
  let component: UploadjobsComponent;
  let fixture: ComponentFixture<UploadjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
