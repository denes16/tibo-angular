import { Component, OnInit } from "@angular/core";
import { ApitiboService } from "../../services/apitibo.service";

@Component({
  selector: "app-listaingredientes",
  templateUrl: "./listaingredientes.component.html",
  styleUrls: ["./listaingredientes.component.css"]
})
export class ListaingredientesComponent implements OnInit {
  constructor(public api: ApitiboService) {}

  ngOnInit(): void {}
}
