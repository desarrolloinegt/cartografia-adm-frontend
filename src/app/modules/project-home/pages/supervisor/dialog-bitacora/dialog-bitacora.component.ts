import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EstadosUpm } from '@core/interfaces/i-hierarchy';
import { BitacoraServiceService } from '@modules/project-home/services/bitacora-service.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';

@Component({
  selector: 'app-dialog-bitacora',
  templateUrl: './dialog-bitacora.component.html',
  styleUrls: ['./dialog-bitacora.component.scss']
})
export class DialogBitacoraComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['upm', 'codigo_usuario', 'nombres', 'apellidos', 'estado', 'options'];
  data: string[] = [];
  projectId:number=0;
  constructor(public dialogRef:MatDialogRef<DialogBitacoraComponent>,private bitService:BitacoraServiceService,private projectService:ProjectHomeService){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(){
    let project=localStorage.getItem('project')||'';
    this.projectService.getIdProject(project).subscribe((data)=>{
      this.projectId=data;
      this.chargueUpms();
    })
  }
  getColor(codigo:string){
    for (let index = 0; index < EstadosUpm.array.length; index++) {
      if(EstadosUpm.array[index].id==Number(codigo)){
        return {color:EstadosUpm.array[index].color,border:`1px solid ${EstadosUpm.array[index].color}`};
      }
     }
     return {};
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  chargueUpms(){
    let data={proyecto_id:this.projectId};
    this.bitService.getLog(data).subscribe((resp)=>{
      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }


}
