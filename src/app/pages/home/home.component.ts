import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user:any=[];
  send:boolean=false;
  userName!: string;
  error = null as any;

  constructor(
    private ref: ChangeDetectorRef,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {}

  handleFind() {
    this.githubService.grtUserDetails(this.userName).subscribe(
      (user) => {
        console.log(user)
        this.user = user;
        this.send = true
        this.error = null;
        this.userName = '';
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = 'User not found';
        this.send = false;
        this.ref.detectChanges();
      }
    );
    
  }
}
