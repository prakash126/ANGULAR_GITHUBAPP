import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'githupapp';

  constructor(private auth:AuthService){ 
    this.auth.getUser().subscribe(
      (user)=>{
       // console.log(user);
      },(err)=>{
        console.log(err);
      }
    );
  }

  ngOnInit(){ }
}
