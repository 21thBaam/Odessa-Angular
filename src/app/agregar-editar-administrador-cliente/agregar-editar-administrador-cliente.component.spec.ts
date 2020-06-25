import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarAdministradorClienteComponent } from './agregar-editar-administrador-cliente.component';

describe('AgregarEditarAdministradorClienteComponent', () => {
  let component: AgregarEditarAdministradorClienteComponent;
  let fixture: ComponentFixture<AgregarEditarAdministradorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEditarAdministradorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarAdministradorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
