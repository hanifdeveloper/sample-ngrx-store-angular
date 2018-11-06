import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamisAddComponent } from './dinamis-add.component';

describe('DinamisAddComponent', () => {
  let component: DinamisAddComponent;
  let fixture: ComponentFixture<DinamisAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamisAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
