import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentPage } from './agent.page';

describe('AgentPage', () => {
  let component: AgentPage;
  let fixture: ComponentFixture<AgentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
