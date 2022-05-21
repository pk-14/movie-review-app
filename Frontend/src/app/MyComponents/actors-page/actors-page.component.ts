import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.css']
})
export class ActorsPageComponent implements OnInit {
  constructor(private service: SharedService) { }

  ActorsList: any = [];

  ngOnInit(): void {
    this.refreshActorList();
  }

  refreshActorList(){
    this.service.getActorsList().subscribe(
      data =>{
        this.ActorsList = data;
        console.log(this.ActorsList)
      }
    )
  }

  sortActors(){
    this.ActorsList = this.ActorsList.sort((a: { ActorName: string; }, b: { ActorName: string; }) => a.ActorName.localeCompare(b.ActorName));
  }

}
