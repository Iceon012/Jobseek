import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyjobsComponent } from './applyjobs.component';

describe('ApplyjobsComponent', () => {
  let component: ApplyjobsComponent;
  let fixture: ComponentFixture<ApplyjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
