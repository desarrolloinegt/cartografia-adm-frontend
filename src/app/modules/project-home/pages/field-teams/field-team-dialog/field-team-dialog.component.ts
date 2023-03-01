import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IFieldTeam } from '@core/interfaces/i-field-team';
import { FieldTeamService } from '@modules/project-home/services/field-team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-field-team-dialog',
  templateUrl: './field-team-dialog.component.html',
  styleUrls: ['./field-team-dialog.component.scss']
})
export class FieldTeamDialogComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<String>;
  displayedColumns: string[] = ['codigo_usuario', 'nombres', 'apellidos', 'options'];


  constructor(
    private fieldTeamService: FieldTeamService, public dialogRef: MatDialogRef<FieldTeamDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder
  ) {
    this.dataSource=new MatTableDataSource();
    this.chargetUsers();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(){
   
  }

  chargetUsers(){
    this.fieldTeamService.getUsersTeam({proyecto_id:this.data.proyecto_id,supervisor:this.data.supervisor}).subscribe((resp)=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    });
    
  }

}
