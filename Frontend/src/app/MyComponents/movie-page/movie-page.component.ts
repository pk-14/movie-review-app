import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  constructor(private service: SharedService) { }

  MoviesList: any = [];

  ngOnInit(): void {
    this.refreshMovieList();
  }

  refreshMovieList(){
    this.service.getMoviesList().subscribe(
      data =>{
        this.MoviesList = data;
        console.log(this.MoviesList)
      }
    )
  }
  
  upVoteTrigger(value: any){
    let temp = 0
    for(let i=0; i< this.MoviesList.length; i++){
      if (this.MoviesList[i]["MovieTitle"] === value){
          this.MoviesList[i]["MovieUpVote"]++;
          temp = i
      }
    }
    var val = {
      MovieId : this.MoviesList[temp]["MovieId"],
      MovieTitle: this.MoviesList[temp]["MovieTitle"],
      MovieDescription: this.MoviesList[temp]["MovieDescription"],
      MovieReleaseDate: this.MoviesList[temp]["MovieReleaseDate"],
      MovieUpVote: this.MoviesList[temp]["MovieUpVote"],
      MovieDownVote: this.MoviesList[temp]["MovieDownVote"]
    }
    this.service.putMoviesList(val).subscribe(
      res => console.log(res)
    )
  }

  downVoteTrigger(value: any){
    let temp = 0
    for(let i=0; i< this.MoviesList.length; i++){
      if (this.MoviesList[i]["MovieTitle"] === value){
          this.MoviesList[i]["MovieDownVote"]++;
          temp = i
      }
    }

    var val = {
      MovieId : this.MoviesList[temp]["MovieId"],
      MovieTitle: this.MoviesList[temp]["MovieTitle"],
      MovieDescription: this.MoviesList[temp]["MovieDescription"],
      MovieReleaseDate: this.MoviesList[temp]["MovieReleaseDate"],
      MovieUpVote: this.MoviesList[temp]["MovieUpVote"],
      MovieDownVote: this.MoviesList[temp]["MovieDownVote"]
    }
    this.service.putMoviesList(val).subscribe(
      res => console.log(res)
    )
  }

  sortMovies(){
    this.MoviesList = this.MoviesList.sort((a: { MovieTitle: string; }, b: { MovieTitle: string; }) => a.MovieTitle.localeCompare(b.MovieTitle));
  }

  sortMoviesByDate(){
    this.MoviesList = this.MoviesList.sort((a: { MovieReleaseDate: string; }, b: { MovieReleaseDate: string; }) => b.MovieReleaseDate.localeCompare(a.MovieReleaseDate));
  }

}
