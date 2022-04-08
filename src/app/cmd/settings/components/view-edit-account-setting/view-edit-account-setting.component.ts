import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-edit-account-setting',
  templateUrl: './view-edit-account-setting.component.html',
  styleUrls: ['./view-edit-account-setting.component.scss']
})
export class ViewEditAccountSettingComponent implements OnInit {

  constructor(private _titleService: Title) { }
  isreadonly = true;
  editing = 0;
  edit(itemId:number){
    console.log('edit content',itemId);
    this.isreadonly = !this.isreadonly;
    this.editing=1;
  }
  save(itemId:number){
    console.log('Save Content', itemId);
    this.isreadonly = !this.isreadonly;
    this.editing=0;
  }

  ngOnInit(): void {
    this._titleService.setTitle('Account Settings');
    this.data();
    this.delete();
  }
  url = "https://www.w3schools.com/howto/img_avatar.png";
  url1: string="https://www.w3schools.com/howto/img_avatar.png";
  data() {

    if (this.url == null || this.url == "") {

      this.url = "https://www.w3schools.com/howto/img_avatar.png";

    } else {

      this.url = this.url1;
    }
  }
  files: null | undefined;
  onSelectFile(e: any) {
    this.data();
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
        this.url1 = this.url;
        this.files = event;
      };
    }
  }
  public delete() {
    this.url = "https://www.w3schools.com/howto/img_avatar.png";
    this.files = null;
  }
  }
