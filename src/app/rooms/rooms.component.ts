import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

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

  roomList : RoomList[]=[
    {
      roomNumber:101,
      roomType:'Deluxe Room',
      amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price:500,
      photos:'https://picsum.photos/200',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.5
    },{
      roomNumber:102,
      roomType:'Deluxe Room',
      amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price:1000,
      photos:'https://picsum.photos/202',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:3.4
    },{
      roomNumber:103,
      roomType:'Private Suite Room',
      amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price:1500,
      photos:'https://picsum.photos/203',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.7
    },
  ]
  
  constructor(){  }
  ngOnInit():void{  }
  toggle = () => {
    this.hideRooms = !this.hideRooms

  }
}
