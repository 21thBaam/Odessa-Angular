import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAdministradorClienteComponent } from './consultar-administrador-cliente.component';

describe('ConsultarAdministradorClienteComponent', () => {
  let component: ConsultarAdministradorClienteComponent;
  let fixture: ComponentFixture<ConsultarAdministradorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarAdministradorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAdministradorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
