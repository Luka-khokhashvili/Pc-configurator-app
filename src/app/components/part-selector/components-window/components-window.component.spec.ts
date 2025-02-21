import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsWindowComponent } from './components-window.component';

describe('ComponentsWindowComponent', () => {
  let component: ComponentsWindowComponent;
  let fixture: ComponentFixture<ComponentsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
