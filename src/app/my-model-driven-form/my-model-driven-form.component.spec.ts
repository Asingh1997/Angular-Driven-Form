import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModelDrivenFormComponent } from './my-model-driven-form.component';

describe('MyModelDrivenFormComponent', () => {
  let component: MyModelDrivenFormComponent;
  let fixture: ComponentFixture<MyModelDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModelDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
