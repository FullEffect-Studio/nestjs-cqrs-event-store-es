import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsListComponent } from './schools-list.component';

describe('MembersListComponent', () => {
  let component: SchoolsListComponent;
  let fixture: ComponentFixture<SchoolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
