import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { LibeyUserService } from './../services/libey-user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  // userDetails: User ={
  //   documentNumber: '',
  //   documentTypeId: 0,
  //   name: '',
  //   fathersLastName:'',
  //   mothersLastName: '',
  //   address: '',
  //   ubigeoCode: '',
  //   phone: '',
  //   email: '',
  //   password: '',
  //   active:''
  // }

  //private route: ActivatedRoute, private userService: LibeyUserService

  constructor() { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe({
    //   next:(params)=>{
    //     const id=params.get('id')
    //     if(id){
    //       this.userService.getUserById(id).subscribe({
    //         next: (response) => {
              
    //         }
    //       })
    //     }
    //   }
    // })
  }

}
