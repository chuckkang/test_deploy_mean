import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
allData=[];
single=[];
sub=[];
somevalue;
	constructor(private _route: Router, private _api: ApiService) {
		
	 }

  ngOnInit() {
	  //verify that the session is active:
	 if(this._api.username==''){
		 this._route.navigate(['/']);
	 }else{
		 this._api.getAll((data)=>{
			 this.allData = data;
		 });
	 }


  }

}
