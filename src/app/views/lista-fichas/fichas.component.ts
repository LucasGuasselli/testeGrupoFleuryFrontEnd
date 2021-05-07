import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Ficha } from 'src/app/models/ficha.model';
import { Item } from 'src/app/models/item.model';
import { Unidade } from 'src/app/models/unidade.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { FichaService } from 'src/app/services/ficha.service';
import { ItemService } from 'src/app/services/item.service';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})

export class FichasComponent implements OnInit {

  fichas: Ficha[] = [];
  //unidades: Unidade[] = [];
  //clientes: Cliente[] = [];
  //itens: Item[] = []


  
  displayedColumns = ['id', 'dataAtendimento', 'clienteId', 'unidadeId'];

  constructor(private fichaService: FichaService,
              private unidadeService: UnidadeService,
              private clienteService: ClienteService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadFichas();
    //this.loadUnidades();
    //this.loadClientes();
    //this.loadItens();

  }

  // recebendo as fichas do back-end
  loadFichas()
  {
    this.fichaService.getAll().subscribe(
      response =>
      {
        this.fichas = response;
      },
      error => { console.log(error); }
    );
  }

  /*
  // recebendo as unidades do back-end
  loadUnidades()
  {
    this.unidadeService.getAll().subscribe(
      response =>
      {
        this.unidades = response;
      },
      error => { console.log(error); }
    );
  }

  // recebendo os clientes do back-end
  loadClientes()
  {
    this.clienteService.getAll().subscribe(
      response =>
      {
        this.clientes = response;
      },
      error => { console.log(error); }
    );
  }

  // recebendo as fichas do back-end
  loadItens()
  {
    this.itemService.getAll().subscribe(
      response =>
      {
        this.listaFichas = response;
         // this.setFichas(this.listaFichas);
      },
      error => { console.log(error); }
    );
  }

  */
}


