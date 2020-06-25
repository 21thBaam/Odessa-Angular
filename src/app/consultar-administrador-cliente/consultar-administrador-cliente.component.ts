import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../data-interfaces/admin-user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { UserService } from '../services/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-consultar-administrador-cliente',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '100%'
      })),
      state('closed', style({
        width: '0',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './consultar-administrador-cliente.component.html',
  styleUrls: ['./consultar-administrador-cliente.component.css']
})
export class ConsultarAdministradorClienteComponent implements OnInit {
  users: AdminUser[];
  page: number;
  pageSize: number;
  searchText;
  isOpen = false;

  /* users: AdminUser[] = [
    {noTrabajador: 1, nombre: ["Angel","Emmanuel"], apellidoPaterno: "Reyes", apellidoMaterno: "Zavala", tipoUsuario: "Admin", estatus: "Activo"},
    {noTrabajador: 2, nombre: ["Quillermo"], apellidoPaterno: "Peña", apellidoMaterno: "Juarez", tipoUsuario: "User", estatus: "Activo"},
    {noTrabajador: 3, nombre: ["Juan"], apellidoPaterno: "Rodriguez", apellidoMaterno: "Ramirez", tipoUsuario: "Admin", estatus: "Inactivo"},
    {noTrabajador: 4, nombre: ["Jose"], apellidoPaterno: "Gonzales", apellidoMaterno: "Correa", tipoUsuario: "User", estatus: "Activo"},
    {noTrabajador: 5, nombre: ["Benito"], apellidoPaterno: "Juarez", apellidoMaterno: "Gonzales", tipoUsuario: "Admin", estatus: "Inactivo"}
  ]; */

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit() {
    this.page = +sessionStorage.getItem('currentPage');
    this.pageSize = 10;
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  openModalDelete(user: AdminUser){
    const modalRef = this.modalService.open(ModalDeleteComponent, {centered: true});
    modalRef.componentInstance.user = user;

    modalRef.result.then(
      (user)=>{
        this.userService.deleteUsers(user).subscribe(response => {
          sessionStorage.setItem('currentPage',this.page.toString());
          this.ngOnInit();
        });
      }
    )
  }

  selectedUser(user){
    sessionStorage.array = JSON.stringify(user);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
