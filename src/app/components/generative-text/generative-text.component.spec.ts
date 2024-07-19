import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeTextComponent } from './generative-text.component';

describe('GenerativeTextComponent', () => {
  let component: GenerativeTextComponent;
  let fixture: ComponentFixture<GenerativeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerativeTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerativeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
