import { Item } from './../../interfaces/iItem';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnChanges(){
    console.log('OnChanges')
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(){
    console.log('Estão tentando me calar.')
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy(){
    console.log('Conseguiram me calar.')
  }
}

// Ciclo de vida Angular OnInit e OnChanges
// Primeiro é chamado o Onchanges e depois o OnInit
// O Angular detecta a informação de entrada
// OnChange prepara as informações
// Oninit tras as informações
