import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemPage } from './dashboard-item.page';

describe('DashboardItemPage', () => {
  let component: DashboardItemPage;
  let fixture: ComponentFixture<DashboardItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
