/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewTargetComponent } from './new-target.component';

describe('NewTargetComponent', () => {
  let component: NewTargetComponent;
  let fixture: ComponentFixture<NewTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
