import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacionDetailComponent } from './cacion-detail.component';

describe('CacionDetailComponent', () => {
  let component: CacionDetailComponent;
  let fixture: ComponentFixture<CacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
