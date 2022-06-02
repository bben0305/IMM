import { Component, OnInit } from '@angular/core';
import { IMM } from '../IMM';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  	model = new IMM(241176,  'ARBURG',  '630H',  'Electric', 40, 200, 160, 512, 2500, 184);

//   modelkeys = function(model:IMM):String[]{
//     var keys = [];
//     for (var key in model) {
//       keys.push(key);
//     }
//     return keys as String[];
//   }

//   getValue = (key: keyof IMM) => {
//     return this.model[key];
//   };
	
	submitted = false;

	onSubmit() { this.submitted = true; }

	url: any; 
	msg = "";

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.model.Picture = reader.result; 
		}
	}
}
