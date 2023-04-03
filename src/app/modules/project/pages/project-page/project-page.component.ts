import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProject, IProjectDataEdit, IProjectList, IProjectListView } from '@core/interfaces/i-project';
import { IUpmAssignmentList } from '@core/interfaces/i-upm-assignment';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import { NewProjectPageComponent } from '../new-project-page';
import { ProjectEditDialogComponent } from '../project-edit-dialog';
import * as XLSX from 'xlsx';
type AOA = any[];
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<IProjectListView>;
  data: AOA = [[1, 2], [3, 4]];
  displayedColumns: string[] = ['id', 'nombre', 'year', 'encuesta','descripcion','progreso','options'];
  date=new Date((new Date()).getDate());
  
  dataEdit:IProjectDataEdit={
    id:0,
    nombre:'',
    year:'',
    encuesta:'',
    descripcion:'',
    automatizacion:0,
    encuesta_id:0
  }
  constructor(private projectService:ProjectService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.cargarProyectos();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openProject() {
    const dialogRef = this.dialogService.open(NewProjectPageComponent, {
      height:'27rem',
      width: '50rem',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1) {
        this.cargarProyectos();
      }
    })
  }

  editar(id:string, nombre: string,fecha:string,encuesta:string, descripcio:string) {
    this.dataEdit.nombre=nombre;
    this.dataEdit.id=Number(id);
    this.dataEdit.encuesta=encuesta;
    this.dataEdit.year=fecha;
    this.dataEdit.descripcion=descripcio;
    const dialogRef = this.dialogService.open(ProjectEditDialogComponent, {
      height: '27rem',
      width: '50rem',
      data: this.dataEdit
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarProyectos();
      } 
    });
  }
  ngOnInit() {
    
  }

  cargarProyectos(){
    this.projectService.getProjectView().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: '¿Esta seguro que desea Desactivar el Proyecto: ' + nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectService.desactiveProyect(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarProyectos();
            Swal.fire('Ok!', 'Proyecto Desactivado', 'success')  
          }
        },(err) => {
          console.log(err);
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
  finalizarProject(id:string,nombre:string){
    Swal.fire({
      title: '¿Esta seguro que desea Finalizar el Proyecto: ' + nombre +'?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectService.projectFinish(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarProyectos();
            Swal.fire('Ok!', 'Proyecto Finalizado', 'success')  
          }
        },(err) => {
          console.log(err);
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
/*
  async addFileUpm(){
    this.fileAlert(1);
  }
  async addFileDepartment(){
    this.fileAlert(2);
  }

  async addFileMunicipios(){
    this.fileAlert(3);
  }

  async fileAlert(type:number){
    this.data=[];
    const { value: file } = await Swal.fire({
      title: 'Seleccione archivo',
      input: 'file',
      inputAttributes: {
        'accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    })

    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.generateJson(type);
    }
    reader.readAsBinaryString(file);}
  }

  generateJson(type:number){
    let array:any[]=[];
    if(type==1){
      this.data.forEach(dto => {
        if(dto[0] && dto[2] && dto[4]){
          array.push({municipio_id:dto[2],nombre:dto[4],departamento_id:dto[0]});
        }
        
      })
      array=array.filter(Boolean);
      this.projectService.createUpms(array).subscribe((resp) => {
        if (resp.status == true) {
          console.log(resp.errores)
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    } else if(type==2){
      this.data.forEach(dto => {
        if(dto[0]){
          array.push({nombre:dto[0]});
        }
      });
      array=array.filter(Boolean);
      this.projectService.createDepartments(array).subscribe((resp) => {
        if (resp.status == true) {
          console.log(resp.errores)
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
      
    } else if(type==3){
      this.data.forEach(dto => {
        if(dto[0] && dto[1] && dto[2]){
          array.push({departamento_id:dto[0],id:dto[1],nombre:dto[2 ]});
        }
      });
      
      array=array.filter(Boolean);
      this.projectService.createMunicipios(array).subscribe((resp) => {
        if (resp.status == true) {
          console.log(resp.errores)
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }*/

}
