import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false
  rooms: Room = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }
  
  constructor(){  }
  ngOnInit():void{  }
  toggle = () => {
    this.hideRooms = !this.hideRooms

  }
}
