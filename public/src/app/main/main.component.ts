import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router'; -- this will need to be place in teh component that will need the activated route
//  Also need to inject this in teh constructor.
// when accessing the param, you need this:
////////////////////
// this._route.paramMap.subscribe(params => {
// 	console.log(params.get('id'));
// })
////////////////////
import 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	arrAll = []; // All questions
	arrQuestion=[]; // data for one question with all answers
	arrAnswers=[]; // data for all answers
	constructor(private _api: ApiService, private _activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this._api.getAll((results)=>{
			this.arrAll = results;
		})

		this._activatedRoute.paramMap.subscribe(params => {
			let questionid: string;
			questionid = params.get('questionid');
			this._api.getAllAnswers(questionid, (data)=>{
				this.arrQuestion = data;
				for(let x=0; x<this.arrQuestion['answers'].length; x ++){
					this.arrAnswers.push(this.arrQuestion['answers'][x]);
					// console.log(this.arrAnswers, "answer array");
				}
		});	
		})
	}

	onSubmit(){
		
	}

	like(i: number){
		this.arrAnswers[i]['likes']++;
		// console.log(this.arrAnswers[i]['likes'], "THE ID: ", this.arrAnswers[i]['_id']);
		var formData = { _id: this.arrAnswers[i]['_id'], likes: this.arrAnswers[i]['likes']}
		this._api.updateVote(formData, (results)=>{
			// console.log(results);
		});
	}
	
}
