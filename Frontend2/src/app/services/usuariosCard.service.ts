import { Injectable } from '@angular/core';
import { Usuarios } from '../admin/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosCardsService {

  constructor() { }

  getAll(): Usuarios[] {
    return [
        {
           rolImgUrl: '/assets/admin.png',
           username: 'Fabián Plaggi',
           rol: 'Administrador'
        },
        {
            rolImgUrl: '/assets/admin.png',
            username: 'Ezequiel Miño',
            rol: 'Administrador'
        },
        {
            rolImgUrl: '/assets/admin.png',
            username: 'Darién Valla',
            rol: 'Administrador'
        },
        {
            rolImgUrl: '/assets/trabajador.png',
            username: 'Trabajador1',
            rol: 'Trabajador'
        },
        {
            rolImgUrl: '/assets/trabajador.png',
            username: 'Trabajador2',
            rol: 'Trabajador'
        }
    ]
}
}
