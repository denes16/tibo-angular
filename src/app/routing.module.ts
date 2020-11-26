import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HomeComponent } from "./components/home/home.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "inventario", component: InventarioComponent },
  { path: "**", pathMatch: "full", redirectTo: "inventario" }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
