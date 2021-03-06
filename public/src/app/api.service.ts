import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx';
@Injectable()
export class ApiService {
	data=[];
	allAppointments=[];
	allAnswers = [];
	val=[];
	username='';
	constructor(private _http: Http) {
		//loading initial in constructor.
		this.getAll((results)=>{});
		
	 }
	 // THESE IS A CREATEITEM METHOD IN OUR SERVICE
	add(item, callback, errorback) {
		this._http.post('/add/new', item).subscribe( 
		(response) => { 
			callback(response.json());
		},
		(error) => { 
			errorback(error.json());
		}
		);
	}

  getAll(callback){
	  this._http.get("/all").subscribe(
		(response)=>{
			this.allAppointments = response.json();
			// this section is only to reformat the date//
			// it is possible to just update initially inserting in to database?
			// for (let count = 0; count < this.allAppointments.length; count++){
			// 	var ndate = this.allAppointments[count].apptdate;
			// 	var strdate = new Date(ndate);
			// 	this.allAppointments[count].apptdate = strdate;

			// 	var ndate = this.allAppointments[count].updatedAt;
			// 	var strdate = new Date(ndate);
			// 	this.allAppointments[count].updatedAt = strdate;
			// }
			
			callback(this.allAppointments)
		},
		(error)=>{
			// console.log(error, "---	 Error in GetAll servicasdfeasdfasdf");
			callback(error);
		}
	)
  }

  getAllAppointments(){
	  return this.allAppointments;
  }
  getAllAnswers(questionid, callback) {
	  this._http.get("/allanswers/" + questionid).subscribe(
		  (response) => {
			  this.allAnswers = response.json();
			  callback(this.allAnswers);
			//   console.log(this.allAnswers, "Success in get all answers");
		  },
		  (error) => {
			//   console.log("Error in GetAll service");
			  callback(error);
		  }
	  )
  }

  allNotes(note) {
	  this._http.post('/allnotes', note).toPromise()
		  .then(data => {
			//   console.log("inside then of promise")
			//   console.log(data)
		  })
		  .catch(err => {
			//   console.log("in api service promise catch")
			//   console.log(err)
		  });
 }
  testPromise() {
	  var allAnswers = this._http.get(`/questions`)
		  .map(data => {
			  console.log(data.json(), "this.data")
			  data.json(); 
			  this.val = data.json();
			  console.log(this.val, "this is the value")
			//   console.log(this.val, "this.val")})
		  })
		  .toPromise()
  }

  getVal(){
	return this.val;
  }
  updateVote (formData, results){
	//   console.log(answerId, "THIS IS TEH ANSWERID")
	  this._http.put("/updatevote", formData).subscribe(
		  (results)=>{
				console.log(results, "this is the results from teh updatevote service");

	  }, (error)=>{
		 		console.log(error, "error updating update vote service")
	  })
  }

  deleteAppointment(formData, results, err){
	  this._http.delete("/delete/"+formData._id).subscribe(
		  (results)=>{
			  console.log("success delete in service")
		  },
		(err)=>{
			  console.log(err, " The delete was err")
		  }
	  )
  }
  login(username: string, callback){
	  this.username = username;
	  //temp name:
	  console.log(this.username, "IN SERVER")
	  callback(this.username);
  }
  logout(){
	  this.username = '';
  }
  getUser(){
	  return this.username;
  }
}

// ```
// // ==== SERVICE SIDE =====



// // THIS IS A SHOWITEM METHOD IN OUR SERVICE
// showItems(callback, errorback) {
//     this._http.get('/items').subscribe( 
//         (response) => {
//             this.items = response.json();
//             callback(response.json());
//         },
//         (error) => { 
//         errorback(error);
//         }
//     );
// }

// // GOING LINE BY LINE
// showItems(callback, errorback) {                // this is our method name and the input callbacks
//     this._http.get('/items').subscribe(         // this calls our backend and waits for response
//         (response) => {                         // if successful response :)
//             this.items = response.json();           // update items in our service
//             callback(response.json());              // run successful (first) callback, pass response as JSON
//         },                                     
//         (error) => {                            // if no response :(
//             errorback(error);                       // run failure (second) callback
//         }
//     );
// }

// // ===== COMPONENT SIDE =====

// // CREATE ITEM FORM SUBMIT
// onSubmit() {                                           // on form submit
//     this._itemService.createItem(this.new_item,        // call our service and service method, pass the new question object
//       (res) => {                                       // if successful
//           this.new_item = new Item();                  // reset our form object (from the ngModel, defined at the top of our component)
//           this.router.navigate('dashboard');                // navigate to dashboard
//       },
//       (err) => {                                       // if failure
//            this.errors = err.errors;                        // update errors object to tell the user why
//       });
//  };


// // SHOW ALL
// show() {                                                // show() can be called in our ngOnInit 
//     this._itemService.showItems(                        // call our service and method, pass two callbacks
//         (res) => {                                      // if successful
//             this.items = res.items;                         // update component variable with data from the response, show the component variable on the html side
//         },
//         (err) => {                                      // if failure
//             this.errors = err.errors;                       // update errors for display on component
//         });
// }

