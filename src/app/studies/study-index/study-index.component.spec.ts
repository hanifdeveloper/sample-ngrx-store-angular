import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyIndexComponent } from './study-index.component';

describe('StudyIndexComponent', () => {
  let component: StudyIndexComponent;
  let fixture: ComponentFixture<StudyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
