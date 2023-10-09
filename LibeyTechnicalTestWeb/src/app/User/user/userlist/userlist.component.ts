import { Component, OnInit } from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {

  listUsers: User [] = [];
  formUser: FormGroup = new FormGroup({});
  isUpdate: boolean = false;

  //const filtro = users.filter(user=>user.name.includes(search))
  constructor(private userService: UserService,private ngxFavicon: AngularFaviconService ) { }
  
  ngOnInit(): void {
    this.list();
    
    this.formUser =  new FormGroup({
      documentNumber: new FormControl(''),
      documentTypeId: new FormControl('1'),
      name: new FormControl(''),
      fathersLastName: new FormControl(''),
      mothersLastName: new FormControl(''),
      address: new FormControl(''),
      ubigeoCode: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      active: new FormControl('1')
    });
  }
  list(){
    this.userService.getUser().subscribe(resp=>{
      if(resp){
        this.listUsers = resp;
      }
    });
  }
    
  save(){
    this.formUser.controls['status'].setValue('1');
    this.userService.saveUser(this.formUser.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formUser.reset();
      }
    });
  }

  update(){
    this.userService.updateUser(this.formUser.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formUser.reset();
      }
    });
  }

  delete(id: any){
    this.userService.deleteUser(id).subscribe(resp=>{
      if(resp){
        this.list();
      }
    });
  }

  newUser(){
    this.isUpdate = false;
    this.formUser.reset();
  }

  selectUser(item: any){
    this.isUpdate = true;
    this.formUser.controls['documentNumber'].setValue(item.documentNumber);
    this.formUser.controls['documentTypeId'].setValue(item.documentTypeId);
    this.formUser.controls['name'].setValue(item.name);
    this.formUser.controls['fathersLastName'].setValue(item.fathersLastName);
    this.formUser.controls['mothersLastName'].setValue(item.mothersLastName);
    this.formUser.controls['address'].setValue(item.address);
    this.formUser.controls['ubigeoCode'].setValue(item.ubigeoCode);
    this.formUser.controls['phone'].setValue(item.phone);
    this.formUser.controls['email'].setValue(item.email);
    this.formUser.controls['password'].setValue(item.password);
    this.formUser.controls['active'].setValue(item.active);

  }

  

}

