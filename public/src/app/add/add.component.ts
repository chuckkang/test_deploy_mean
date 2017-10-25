import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	allAppointments = [];
	appointmenttime: string;
	appointmentdate: string;
	complaint: string;
	errMessage: string;
	username: string;
	fulltime: Date;
  constructor(private _api: ApiService, private _router: Router) { 
	  this.username = this._api.getUser();
	  this.allAppointments = this._api.getAllAppointments();
  }

  ngOnInit() {
	  if (this._api.username == '') {
		  this._router.navigate(['/']);
	  } else {
	 this._api.getAll((results)=>{
		 this.allAppointments = results;
		//  console.log("this.allAppointments", this.allAppointments[15].apptdate)
	 })
	}
	//  this.checkMaxAppointments();
  }

  onSubmit(){


	  this.fulltime = new Date(this.appointmentdate + " " + this.appointmenttime)
		if (this.checkValidDate(this.fulltime)){
			if (this.checkMaxAppointments()){
				this._api.add( {
				name: this.username, 
				complaint: this.complaint, 
				apptdate: this.appointmentdate, 
				appttime: this.appointmenttime,
				fulldate: this.fulltime},
				(res)=>{
					//   console.log(res, "this should be a success")
					this._router.navigate(['/dashboard']);
					console.log("UPDATE IS SUCCESS")
				},
				(err)=>{
					console.log(err, "this is an err")
				})
			}
			else{
				this.errMessage = "There are too many appointments for this date. choose another"
			}
		
	 }else{
		 this.errMessage = "The appointment date must be after today's date"
	 }

	
}
	  
  checkValidDate(date: Date) {
	  var aptDate = date;
	  var currentDate = new Date();
	  if (aptDate < currentDate ){
		//   console.log("It is less")
		  return false;
	  }else{
		//   console.log("it is after")
		  return true;
	  }  
  } 
	 
  checkMaxAppointments(){
	  var count = 0;

		for (let x=0; x<this.allAppointments.length; x++){
			console.log(this.appointmentdate, this.allAppointments[x]['apptdate'], " EQUA asdfasdf ads")
			if (this.appointmentdate == this.allAppointments[x]['apptdate']){
				//console.log(this.allAppointments[x]['apptdate'])
				count++;
			}
		}
		if (count>2){
			return false;
		}else{
			return true;
		}

  }
}
