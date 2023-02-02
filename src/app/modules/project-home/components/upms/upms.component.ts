import { Component, ViewChild, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
type AOA = any[];
@Component({
  selector: 'app-upms',
  templateUrl: './upms.component.html',
  styleUrls: ['./upms.component.scss']
})
export class UpmsComponent {
  formUpms!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 // @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['departamento', 'municipio', 'upm', 'estado', 'options'];
  data: string[] = [];
  idProject!: number;

  upmDataSust:AssignmentUpmProjectSustituir={
    proyecto_id:0,
    upm_nuevo:'',
    upm_anterior:0
  }
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private homeProjectService: ProjectHomeService, private projectService: ProjectService) {
    this.dataSource = new MatTableDataSource();
    this.buildForm();
  }

  private buildForm() {
    this.formUpms = this.formBuilder.group({
      file: [''],
    });
  }

  ngOnInit() {
    this.homeProjectService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
      this.idProject = data;
      this.cargarUpmsAsignadas();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  alertFile(event: any) {
    Swal.fire({
      title: '¿Esta seguro que desea cargar el archivo: ' + event.target.files[0].name + '?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.chargeFile(event)
      } else {
        event.target.value = null;
      }
    })
  }
  chargeFile(event: any) {

    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.generateJson();
    }
    reader.readAsBinaryString(target.files[0]);

  }
  assignment: AssignmentUpmProject = {
    proyecto_id: 0,
    upms: []
  };
  generateJson() {
    if (this.idProject) {
      this.assignment.proyecto_id = this.idProject;

      this.data.forEach(dto => {
        this.assignment.upms.push(dto.toString());
      })

    }
    this.projectService.assignUpmToProject(this.assignment).subscribe((resp) => {
      if (resp.status == true) {
        this.cargarUpmsAsignadas();
        Swal.fire('Ok!', resp.message, 'success');
      }
    });
  }

  cargarUpmsAsignadas() {
    if (this.idProject != 0) {
      this.projectService.getUpms(this.idProject).subscribe(resp => {
        this.dataSource =new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
      })
    }

  }

  async addUpm() {
    const { value: upm } = await Swal.fire({
      title: 'UPM',
      input:"text",
      inputPlaceholder:"AEE001122337A2",
      confirmButtonText: 'Agregar UPM',
      showCancelButton: true,
      inputLabel: 'Ingrese la UPM',
    })
    if (upm) {
      this.assignment.proyecto_id=this.idProject;
      this.assignment.upms=[upm];
      this.projectService.assignUpmToProject(this.assignment).subscribe(resp=>{
        if(resp.status==true){
          this.cargarUpmsAsignadas();
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }

  async sustituirUpm(id:string) {
    this.upmDataSust.proyecto_id=this.idProject;
    this.upmDataSust.upm_anterior=Number(id);
    const { value: upm } = await Swal.fire({
      title: 'UPM',
      input:"text",
      inputPlaceholder:"AEE001122337A2",
      confirmButtonText: 'Ok',
      showCancelButton: true,
      inputLabel: 'Ingrese la UPM',
    })
    if (upm) {
      this.upmDataSust.upm_nuevo=upm;
      this.projectService.sustituirUpm(this.upmDataSust).subscribe(resp=>{
        if(resp.status==true){
          this.cargarUpmsAsignadas();
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }

}

export interface AssignmentUpmProject {
  proyecto_id: number,
  upms: string[],
}
export interface AssignmentUpmProjectSustituir{
  proyecto_id:number,
  upm_anterior:number,
  upm_nuevo:string,
}
