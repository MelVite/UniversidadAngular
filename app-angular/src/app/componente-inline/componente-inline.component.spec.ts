import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInlineComponent } from './componente-inline.component';

describe('ComponenteInlineComponent', () => {
  let component: ComponenteInlineComponent;
  let fixture: ComponentFixture<ComponenteInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
