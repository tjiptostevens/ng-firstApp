import { Component } from '@angular/core';
import GetData from '../infrastructure/getData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(){}
getTrendingMovies(){

}

ngOnInit():void{ 
 const data = GetData("https://api.themoviedb.org/3/movie/550?api_key=d4538f936ffc326e6145626accc8d24d") }
}
