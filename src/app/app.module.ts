import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./routing.module"; // CLI imports AppRoutingModule
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ListaingredientesComponent } from './components/listaingredientes/listaingredientes.component';

@NgModule({
  declarations: [AppComponent, InventarioComponent,HomeComponent, ListaingredientesComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
