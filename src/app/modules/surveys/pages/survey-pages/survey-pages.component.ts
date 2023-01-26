import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISurvey } from '@core/interfaces/i-survey';
import { SurveyService } from '@modules/surveys/services';
import { NgxPermissionsService } from 'ngx-permissions';
import Swal from 'sweetalert2';
import { SurveyEditDialogComponent } from '../survey-edit-dialog';

@Component({
  selector: 'app-survey-pages',
  templateUrl: './survey-pages.component.html',
  styleUrls: ['./survey-pages.component.scss']
})
export class SurveyPagesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','options'];
  surveyData:ISurvey={
    id:0,
    nombre:'',
    descripcion:''
  }
  constructor(private surveyService:SurveyService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editar(id:string, nombre: string, descripcion:string) {
    this.surveyData.nombre=nombre;
    this.surveyData.descripcion=descripcion;
    this.surveyData.id=Number(id);
    const dialogRef = this.dialogService.open(SurveyEditDialogComponent, {
      height: '30rem',
      width: '50rem',
      data: this.surveyData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarEncuestas();
      } 
    });
  }
  ngOnInit() {
    this.cargarEncuestas();
  }

  cargarEncuestas(){
    this.surveyService.getSurveys().subscribe((data)=>{ 
      this.dataSource=new MatTableDataSource(data);
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
        this.surveyService.desactiveSurvey(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarEncuestas();
            Swal.fire('Ok!', resp.message, 'success')  
          }
        },(err) => {
          console.log(err);
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
}
