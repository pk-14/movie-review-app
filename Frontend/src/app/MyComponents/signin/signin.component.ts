import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginInfo!: { username: string; password: string};
  constructor(private service: SharedService) { }
  

  ngOnInit(): void {
    this.loginInfo = {
      username: '',
      password: ''
    }
  }
  loginUser(){
    this.service.loginUser(this.loginInfo).subscribe(
        (response) => {
          alert('User logged in successfully!')
        },
        (error) => console.log(error)
    )
  }

}
