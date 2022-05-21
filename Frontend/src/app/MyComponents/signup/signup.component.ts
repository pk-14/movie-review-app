import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  register!: { username: string; password: string; email: string; };
  constructor(private service: SharedService,
    private router: Router) { }

  ngOnInit(): void {
    this.register = {
      username: '',
      password: '',
      email: ''
    }
  }
  registerUser(){
    this.service.registerUser(this.register).subscribe(
        (response) => {
          alert('User created successfully!')
          this.router.navigate(['signin'])
        },
        (error) => console.log(error)
    )
  }

}
