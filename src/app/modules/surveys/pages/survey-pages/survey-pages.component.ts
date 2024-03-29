import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISurvey } from '@core/interfaces/i-survey';
import { SurveyService } from '@modules/surveys/services';
import Swal from 'sweetalert2';
import { NewSurveyPagesComponent } from '../new-survey-pages';
import { SurveyEditDialogComponent } from '../survey-edit-dialog';

@Component({
  selector: 'app-survey-pages',
  templateUrl: './survey-pages.component.html',
  styleUrls: ['./survey-pages.component.scss']
})
export class SurveyPagesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','options'];
  surveyData:ISurvey={
    id:0,
    nombre:'',
    descripcion:''
  }

  public filterValue:any; 

  constructor(private surveyService:SurveyService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  open() {
    const dialogRef = this.dialogService.open(NewSurveyPagesComponent, {
      height: '20rem',
      width: '50rem',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==1){
        this.cargarEncuestas();
      } 
    });
  }

  editar(id:string, nombre: string, descripcion:string) {
    this.surveyData.nombre=nombre;
    this.surveyData.descripcion=descripcion;
    this.surveyData.id=Number(id);
    const dialogRef = this.dialogService.open(SurveyEditDialogComponent, {
      height: '20rem',
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
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  desactivar(id: string, nombre: string) {
    Swal.fire({
      title: '¿Está seguro que desea desactivar la encuesta: ' + nombre + '?',
      text: "¡Esta acción no se podrá revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'
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
