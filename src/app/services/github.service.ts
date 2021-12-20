import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// https://api.github.com/users/prakash126
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url='https://api.github.com/users';
  constructor(private http:HttpClient) { }

  grtUserDetails(userName:string){
    // return this.http.get(`${this.url}/${userName}`);
    return this.http.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl:string){
    return this.http.get(repoUrl);
  }
}
