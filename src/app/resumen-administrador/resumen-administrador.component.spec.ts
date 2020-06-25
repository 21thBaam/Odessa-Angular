import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenAdministradorComponent } from './resumen-administrador.component';

describe('ResumenAdministradorComponent', () => {
  let component: ResumenAdministradorComponent;
  let fixture: ComponentFixture<ResumenAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
