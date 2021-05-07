import { Component, OnInit } from '@angular/core';
import { Ficha } from 'src/app/models/ficha.model';
import { FichaService } from 'src/app/services/ficha.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  fichas: Ficha[] = [];

  constructor(private fichaService: FichaService) { }

  ngOnInit(): void {
   // this.fichaService.showOnConsole("TESTE!!");
    this.carregarFichas();
  }

  carregarFichas()
  {
    this.fichaService.retornarTodos().subscribe(
      response =>
      {
        this.fichas = response;
        console.log(response);
      },
      error => { console.log(error); }
    );
  }
}
