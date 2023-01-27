import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@modules/user/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-superadmin-page',
  templateUrl: './superadmin-page.component.html',
  styleUrls: ['./superadmin-page.component.scss']
})
export class SuperadminPageComponent {
  superAdminForm!:FormGroup;
  checked:boolean;
  constructor(private builForm:FormBuilder,private userService:UserService,public dialogRef:MatDialogRef<String>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.formBuilder();
    this.getStatusUser();
    this.checked=false;
  }
  submit(){}
  private formBuilder(){
    this.superAdminForm=this.builForm.group({
      check:[''],
    });
  }
  ngOnInit(){
    this.getStatusUser();
  }
  getStatusUser(){
    this.userService.isAdmin(Number(this.data.id)).subscribe(resp=>{
      if(resp.status==true)
        this.checked=true
    })
  }
  get Check(){
    return this.superAdminForm.get('check');
  }
  change(){
    if(!this.Check?.value[0]){
      this.Check?.setValue(['h']);
    }
    this.userService.assignAdmin(Number(this.data.id),this.Check?.value[0]).subscribe(resp=>{
      if(resp.status==true){
        Swal.fire('Ok!', resp.message, 'success');
        this.dialogRef.close(1);
      }
    });
  }
  cancel(){
    if(this.checked){
      this.checked=false;
    }
    this.dialogRef.close();
  }
}
