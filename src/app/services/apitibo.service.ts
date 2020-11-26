import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ApitiboService {
  public ingredientes = [];
  constructor(private http: HttpClient) {
    this.getIngredientes();
  }
  getIngredientes() {
    this.http
      .get("https://tibo.herokuapp.com/api/ingredientes")
      .subscribe((resp: any) => {
        this.ingredientes = resp.ingredientes;
        console.log(this.ingredientes);
      });
  }
}
