import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username='';
	constructor(private _api: ApiService, private _route: Router) { }

  ngOnInit() {

  }
  onSubmit(){
	  console.log("onsubmit()")
	  this._api.login(this.username, (success)=>{
		//console.log("logged in:", success);
		console.log(this.username, "username")
		this._route.navigate(['/dashboard']);
	  });
	  
  }
}
