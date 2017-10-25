import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DeleteComponent } from "./delete/delete.component";

const routes: Routes = [
	{ path: "", component: LoginComponent, pathMatch: "full"},
	{ path: "dashboard", component: DashboardComponent, pathMatch: "full" },
	{ path: "add", component: DeleteComponent, pathMatch: "full" },
	{ path: "delete/:questionid", component: DeleteComponent, pathMatch: "full" },
	{ path: "update/:id", component: MainComponent, pathMatch: "full" },
	{ path: "answers/:questionid", component: MainComponent, pathMatch: "full" },
	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
