import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBuildComponent } from './final-build.component';

describe('FinalBuildComponent', () => {
  let component: FinalBuildComponent;
  let fixture: ComponentFixture<FinalBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
