import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HomeComponent } from "./components/home/home.component";
const routes: Routes = [
   {path: "home", component: HomeComponent },
  {path: "**", pathMatch: "full", redirectTo:'home'  }
  ]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}