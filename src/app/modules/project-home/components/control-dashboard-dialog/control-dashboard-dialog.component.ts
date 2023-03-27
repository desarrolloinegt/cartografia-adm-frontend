import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, RouterLinkActive } from '@angular/router';
import { IDepartament } from '@core/interfaces/i-departament';
import { EstadosUpm } from '@core/interfaces/i-hierarchy';
import { DialogBitacoraComponent } from '@modules/project-home/pages';
import { ControlDashboardService } from '@modules/project-home/services/control-dashboard.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';

@Component({
  selector: 'app-control-dashboard-dialog',
  templateUrl: './control-dashboard-dialog.component.html',
  styleUrls: ['./control-dashboard-dialog.component.scss']
})
export class ControlDashboardDialogComponent {
  total: number;
  totalProgres: number;
  finished: number;
  progress: number;
  projectId: number;
  percentajeFinished: number;
  percentajeProgress: number;
  departmentId:number=0;
  departmentName:string="";
  formDashboard!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['municipio', 'upm', 'estado', 'options'];
  data: string[] = [];

  departamentoData: IDepartament = {
    id: 0,
    nombre: '',
    image: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private dashboardService: ControlDashboardService,
    public dialogService: MatDialog,
    private projectHomeService: ProjectHomeService,
    private route:ActivatedRoute
  ) {
    
    this.dataSource = new MatTableDataSource();
    this.total = 0;
    this.finished = 0;
    this.progress = 0;
    this.projectId = -1;
    this.percentajeFinished = 0;
    this.percentajeProgress = 0;
    this.totalProgres = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.departmentId=Number(params['id'])||0;
    })
    let project=localStorage.getItem('project')||'';
    this.projectHomeService.getIdProject(project).subscribe(data=>{
      this.projectId=data;
      this.chargeData();
    })
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  chargeData() {
    let data={departamento_id:this.departmentId,proyecto_id:this.projectId}
    this.dashboardService.getDataDepartment(data).subscribe((resp)=>{
      this.departmentName=resp.nombre;
      this.total=resp.total;
      this.progress=resp.progreso;
      this.finished=resp.finished;
      this.totalProgres=this.total-this.finished;
      this.percentajeFinished = (this.finished * 100) / this.total;
      this.percentajeProgress = (this.progress * 100) / this.totalProgres;
      this.dataSource = new MatTableDataSource(resp.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  getColor(estado: string) {
    for (let index = 0; index < EstadosUpm.array.length; index++) {
      if (EstadosUpm.array[index].id == Number(estado)) {
        return { color: EstadosUpm.array[index].color, border: `1px solid ${EstadosUpm.array[index].color}` };
      }
    }
    return {};
  }
  styleFinished() {
    return { 'stroke-dasharray': `${this.percentajeFinished},100` };
  }

  styleProgress() {
    return { 'stroke-dasharray': `${this.percentajeProgress},100` };
  }

  seeBitacor(upm:String){
    const dialogRef=this.dialogService.open(DialogBitacoraComponent,{
      height:'40rem',
      width:'48rem',
      data:upm
    });
  }
}
