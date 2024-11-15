import { Component } from '@angular/core';
import { Usuarios } from '../../models/usuario.model';
import { UsuariosCardsService } from '../../../services/usuariosCard.service';

@Component({
  selector: 'app-usuarios-cards',
  templateUrl: './usuarios-cards.component.html',
  styleUrl: './usuarios-cards.component.css'
})
export class UsuariosCardsComponent {
  usauriosCards: Usuarios[] = [];
  constructor(private uc:UsuariosCardsService) {

  }

  ngOnInit(): void {
    this.usauriosCards = this.uc.getAll();
  }
}
