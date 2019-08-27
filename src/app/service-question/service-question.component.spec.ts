import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQuestionComponent } from './service-question.component';

describe('ServiceQuestionComponent', () => {
  let component: ServiceQuestionComponent;
  let fixture: ComponentFixture<ServiceQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
