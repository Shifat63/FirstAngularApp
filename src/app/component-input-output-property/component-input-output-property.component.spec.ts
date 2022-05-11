import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputOutputPropertyComponent } from './component-input-output-property.component';

describe('ComponentInputOutputPropertyComponent', () => {
  let component: ComponentInputOutputPropertyComponent;
  let fixture: ComponentFixture<ComponentInputOutputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInputOutputPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInputOutputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
