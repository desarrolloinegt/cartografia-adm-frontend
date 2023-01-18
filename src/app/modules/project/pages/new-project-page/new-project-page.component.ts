import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.scss']
})
export class NewProjectPageComponent {
  projectForm!:FormGroup;
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  private buildForm(){
    this.projectForm=this.formBuilder.group({
      nombre:['',Validators.required],
      fecha:['',Validators.required],
      encuesta:['',[Validators.required]]
    });
  }
  get Nombre() {
    return this.projectForm.get('nombre');
  }
  get Fecha() {
    return this.projectForm.get('fecha');
  }

  get Encuesta() {
    return this.projectForm.get('encuesta');
  }

  createProject(){ 
    /*this.roleService.createRol(this.rol).subscribe((resp)=>{
      if(resp.status==true){
        this.asignacionPermisoRol.rol_id=resp.id_rol;
        this.roleService.assignPermisoToRol(this.asignacionPermisoRol).subscribe((res)=>{
          if(res.status==true){
            Swal.fire('Ok!', res.message, 'success');
          }
        },(err) => {
          console.log(err);
        });
      }
    });*/
  }
}
