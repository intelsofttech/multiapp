import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatierePage } from './matiere.page';

describe('MatierePage', () => {
  let component: MatierePage;
  let fixture: ComponentFixture<MatierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
