// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-edit-comments',
//   templateUrl: './view-edit-comments.component.html',
//   styleUrls: ['./view-edit-comments.component.scss']
// })
// export class ViewEditCommentsComponent implements OnInit {

//   constructor() { }
//   isreadonly = true;
//   editing = 0;
//   edit1(itemId:number){
//     console.log('Save Content', itemId);
//     this.isreadonly = !this.isreadonly;
//     this.editing=1;
//   }

// save1(itemId:number){
//   console.log('Save Content',itemId);
//   this.isreadonly = !this.isreadonly;
//   this.editing=0;
// }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

import  comment from '../../../../../../../../faker.json';

import { Apicomment } from '../../../../../../services/comment.service';



@Component({

  selector: 'app-view-edit-comments',

  templateUrl: './view-edit-comments.component.html',

  styleUrls: ['./view-edit-comments.component.scss']

})

export class ViewEditCommentsComponent implements OnInit {

 

 

 

  constructor() { }

  isreadonly = true;

  editing = 0;

  edit1(itemId:number){

    console.log('Save Content', itemId);

    this.isreadonly = !this.isreadonly;

    this.editing=1;

  }



save1(itemId:number){

  console.log('Save Content',itemId);

  this.isreadonly = !this.isreadonly;

  this.editing=0;

}



 

  ngOnInit(): void {

  }



}
