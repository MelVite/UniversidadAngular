import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTareaLocalReferenceComponent } from './agregar-tarea-local-reference.component';

describe('AgregarTareaLocalReferenceComponent', () => {
  let component: AgregarTareaLocalReferenceComponent;
  let fixture: ComponentFixture<AgregarTareaLocalReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTareaLocalReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTareaLocalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
