import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictpagesComponent } from './districtpages.component';

describe('DistrictpagesComponent', () => {
  let component: DistrictpagesComponent;
  let fixture: ComponentFixture<DistrictpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
