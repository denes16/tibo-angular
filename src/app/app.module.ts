import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./routing.module"; // CLI imports AppRoutingModule
import { AppComponent } from "./app.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, InventarioComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
