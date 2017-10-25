import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DeleteComponent } from "./delete/delete.component";
import { AddComponent } from "./add/add.component";
import { LogoutComponent } from "./logout/logout.component";
const routes: Routes = [
	{ path: "", component: LoginComponent, pathMatch: "full"},
	{ path: "dashboard", component: DashboardComponent, pathMatch: "full" },
	{ path: "add", component: AddComponent, pathMatch: "full" },
	{ path: "delete/:id", component: DeleteComponent, pathMatch: "full" },
	{ path: "logout", component: LogoutComponent, pathMatch: "full" },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
