import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraFuncionesComponent } from './calculadora-funciones.component';

describe('CalculadoraFuncionesComponent', () => {
  let component: CalculadoraFuncionesComponent;
  let fixture: ComponentFixture<CalculadoraFuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraFuncionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
