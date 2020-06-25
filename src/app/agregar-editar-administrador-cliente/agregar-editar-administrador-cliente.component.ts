import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuarioService } from '../services/tipo-usuario.service';
import { TipoUsuario } from '../data-interfaces/tipo-usuario';
import { EstatusUsuarioService } from '../services/estatus-usuario.service';
import { EstatusUsuario } from '../data-interfaces/estatus-usuario';
import { AdminUser } from '../data-interfaces/admin-user'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agregar-editar-administrador-cliente',
  templateUrl: './agregar-editar-administrador-cliente.component.html',
  styleUrls: ['./agregar-editar-administrador-cliente.component.css']
})
export class AgregarEditarAdministradorClienteComponent implements OnInit {
  action: string;
  texto_accion: string = "Dar de alta un nuevo usuario";
  tipos: TipoUsuario;
  estatus: EstatusUsuario;
  usuario: AdminUser = {} as AdminUser;

  constructor(private router: Router, private usuarioTipoService: TipoUsuarioService, private estatusUsuarioService: EstatusUsuarioService, private userService: UserService) {
  }

  ngOnInit() {
    this.action = this.router.url;
    if(this.action == "/alta"){
      this.texto_accion = "Dar de alta un nuevo usuario";
    }else if(this.action == "/editar"){
      this.texto_accion = "Editar información de un usuario";
      this.usuario = JSON.parse(sessionStorage.array);
      console.log(this.usuario);
    }
    this.usuarioTipoService.getTipo().subscribe((response) => {
      this.tipos = response;
    });
    this.estatusUsuarioService.getEstatus().subscribe((response) => {
      this.estatus = response;
    });
  }

  onSubmit(){
    console.log(this.usuario);
    if(this.action == '/alta'){
      this.userService.addUsers(this.usuario).subscribe((response) => {
        this.router.navigate(['/consultar']);
      });
    }else if(this.action == '/editar'){
      this.userService.updateUsers(this.usuario).subscribe((response) => {
        this.router.navigate(['/consultar']);
      });
    }
  }

  cancel(){
    this.usuario = {} as AdminUser;
    this.router.navigate(['/consultar']);
  }

  ngOnDestroy(){
    sessionStorage.clear();
  }
}