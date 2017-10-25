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
username:string;
	constructor(private _route: Router, private _api: ApiService) {
		this.username = this._api.getUser();
	 }

  ngOnInit() {
	  //verify that the session is active:
	 if(this._api.username==''){
		 this._route.navigate(['/']);
	 }else{
			  this._api.getAll((data) => {
		this.allData = data;
		console.log(this.allData, "THIs IS ALL DATA")
	});
		  
	 
  }
  }}

