import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraInterfazComponent } from './calculadora-interfaz.component';

describe('CalculadoraInterfazComponent', () => {
  let component: CalculadoraInterfazComponent;
  let fixture: ComponentFixture<CalculadoraInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraInterfazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
