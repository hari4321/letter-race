import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingScreenComponent } from './typing-screen.component';

describe('TypingScreenComponent', () => {
  let component: TypingScreenComponent;
  let fixture: ComponentFixture<TypingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
