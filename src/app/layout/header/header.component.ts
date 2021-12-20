import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email = null as any;
  constructor(private authService:AuthService,private toastr:ToastrService,private router:Router) {
    this.authService.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
   }

  ngOnInit(): void {
  }


  async handleSignOut(){
    try{
      const res = await this.authService.signOut();
      this.toastr.success('Logout successfully');
      this.router.navigateByUrl('/signin');
      this.toastr.info('Login Again To COntinue');
      this.email = null;
    }catch(error){
      this.toastr.error('Something is worng');
    }
  }
}
