import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSondageComponent } from './liste-sondage.component';

describe('ListeSondageComponent', () => {
  let component: ListeSondageComponent;
  let fixture: ComponentFixture<ListeSondageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSondageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
