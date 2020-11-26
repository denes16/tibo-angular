import { Component, OnInit } from "@angular/core";
import { ApitiboService } from "../../services/apitibo.service";

@Component({
  selector: "app-inventario",
  templateUrl: "./inventario.component.html",
  styleUrls: ["./inventario.component.css"]
})
export class InventarioComponent implements OnInit {
  constructor(private api: ApitiboService) {
    const p = api.ingredientes;
    console.log(p);
  }

  ngOnInit(): void {}
}
