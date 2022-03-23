import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-tile',
  templateUrl: './appointment-tile.component.html',
  styleUrls: ['./appointment-tile.component.scss']
})
export class AppointmentTileComponent implements OnInit {
  @Input()
  doctorName!: string;
  @Input()
  specialisation!: string;
  @Input()
  time!: string;
  @Input()
  date!: string;
  @Input()
  description!: string;
  @Input()
  comment!: string;
  @Input()
  test!: string;

  constructor() { }

  ngOnInit(): void {
  }
  
}
