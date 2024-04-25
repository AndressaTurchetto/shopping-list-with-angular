import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaSerEditado! : Item;
  constructor(private listaService:
    ListaDeCompraService) { }

    // Método do ciclo de vida
    ngOnInit(): void {
      this.listaDeCompra = this.listaService.getListaDeCompra();
      console.log(this.listaDeCompra);
    }

    editarItem(item: Item) {
      this.itemParaSerEditado = item;
    }

    deletarItem(id : number){
      const index = this.listaDeCompra.findIndex((item) =>item.id === id);
      this.listaDeCompra.splice(index, 1);
    }

    limparLista() {
      this.listaDeCompra = [];
    }

    // DoCheck escuta todas as alterações do componente filho, use com cuidado. Pode ter perda de performace.
    ngDoCheck() {
      console.log('DoCheck foi chamado')
      this.listaService.atualizarLocalStorage();
    }
}
