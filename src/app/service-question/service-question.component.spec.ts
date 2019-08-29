import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQuestionComponent } from './service-question.component';
import { SharedModule } from '../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ServiceQuestionComponent', () => {
  let component: ServiceQuestionComponent;
  let fixture: ComponentFixture<ServiceQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceQuestionComponent ],
      imports: [ SharedModule, BrowserAnimationsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
