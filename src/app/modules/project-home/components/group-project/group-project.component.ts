import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IGroup } from '@core/interfaces/i-group';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-project',
  templateUrl: './group-project.component.html',
  styleUrls: ['./group-project.component.scss']
})
export class GroupProjectComponent {
  @ViewChild('table', { static: true }) table!: MatTable<IGroup>;
  dataSource!:IGroup[];
  displayedColumns: string[] = ['nombre', 'jerarquia','descripcion','options'];
  dragDisabled=true;
  group:IGroup={
    id:0,
    jerarquia:0,
    nombre:'',
    descripcion:'',
    proyecto_id:0,
    proyecto:''
  };
  constructor(private projectHomeService:ProjectHomeService){
  }

  ngOnInit(): void{
    this.cargarGrupos();
  }

  drop(event: CdkDragDrop<string>){
    let lenght=this.dataSource.length;
    this.dragDisabled=true;
    const group=this.dataSource.find((i)=>i==event.item.data)||this.group;
    const previousIndex=this.dataSource.findIndex((i)=>i==event.item.data);
    moveItemInArray(this.dataSource,previousIndex,event.currentIndex);
    this.table.renderRows();
    for (let i = 0; i < this.dataSource.length; i++) {
      for (let j = 0; j < this.dataSource.length; j++){
        if(this.dataSource[i].jerarquia>this.dataSource[j].jerarquia || this.dataSource[i].jerarquia==this.dataSource[j].jerarquia){
          this.dataSource[i].jerarquia=this.dataSource.length-i;
        }
      }  
    }
  }
  desactivar(id:string,nombre:string){
    
  }

  editar(id:string,nombre:string,descripcion:string,proyecto_id:string){

  }

  guardarJerarquias(){
    Swal.fire({
      title: 'Guardar orden de los roles',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        this.projectHomeService.guardarJerarquias(this.dataSource).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarGrupos();
            Swal.fire('Ok!',"Organizacion Actualizada", 'success')  
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
  cargarGrupos(){
    let project=localStorage.getItem('project')||'';
    this.projectHomeService.getGroupsProject(project).subscribe(data=>{
      this.dataSource=data;
      for (let i=0; i<this.dataSource.length; i++) {
          if(this.dataSource[i].jerarquia==0){
            this.dataSource[i].jerarquia=(this.dataSource.length)-i;
          } 
      }
    });
  }

  verUsuarios(id:string, nombre:string){
  }

  verRoles(id:string,nombre:string){
  }
}
