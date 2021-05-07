import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Ficha } from 'src/app/models/ficha.model';
import { Item } from 'src/app/models/item.model';
import { StoredProcedure } from 'src/app/models/storedProcedure';
import { Unidade } from 'src/app/models/unidade.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { FichaService } from 'src/app/services/ficha.service';
import { ItemService } from 'src/app/services/item.service';
import { StoredProcedureService } from 'src/app/services/stored-procedure.service';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})

export class FichasComponent implements OnInit {

  storedProcedures: StoredProcedure[] = [];
  //fichas: Ficha[] = [];
  //unidades: Unidade[] = [];
  //clientes: Cliente[] = [];
  //itens: Item[] = []


  
  displayedColumns = ['unidadeNome', 'unidadeId', 'fichaId', 'dataAtendimento', 'clienteNome', 'dataNasc', 'id', 'dataAtendimento', 'sigaExame'];

  constructor(private storedProcedureService: StoredProcedureService,
              private fichaService: FichaService,
              private unidadeService: UnidadeService,
              private clienteService: ClienteService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadStoredProcedure();
    
    //this.loadFichas();
    //this.loadUnidades();
    //this.loadClientes();
    //this.loadItens();

  }

    // recebendo as fichas do back-end
    loadStoredProcedure()
    {
      this.storedProcedureService.getAll().subscribe(
        response =>
        {
          this.storedProcedures = response;
            this.unificarNomes(this.storedProcedures);
        },
        error => { console.log(error); }
      );
    }

    // JUNTAR O NOME E SOBRENOME EM UMA STRING 
    unificarNomes(storedProcedures: StoredProcedure[])
    {
      for (let i = 0; i < this.storedProcedures.length; i++)
      {
        storedProcedures[i].clienteNome += " " + storedProcedures[i].sobrenome; 
      }
    }

   /*
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


