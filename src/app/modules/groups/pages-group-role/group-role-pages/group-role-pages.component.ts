import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroupRoleAssignment } from '@core/interfaces/i-group';
import { GroupService } from '@modules/groups/services';
import Swal from 'sweetalert2';
import { GroupRoleEditDialogComponent } from '../group-role-edit-dialog/group-role-edit-dialog.component';

@Component({
  selector: 'app-group-role-pages',
  templateUrl: './group-role-pages.component.html',
  styleUrls: ['./group-role-pages.component.scss']
})
export class GroupRolePagesComponent {
  hide = true;
  public passwordType = 'password';
  public loading = false;
  
  displayedColumns: string[] = ['id', 'nombre', 'roles', 'options'];
  dataSource: MatTableDataSource<string>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  groupRoles:IGroupRoleAssignment={
    id:0,
    nombre:'',
    roles:[]
  }
  constructor(private groupService:GroupService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
   
  }
  ngOnInit() {
    this.getGroupsRoles();
  }

  getGroupsRoles(){
    this.groupService.getGroupsRoles().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(id: string, nombre: string, roles:[]) {
    this.groupRoles.id=Number(id);
    this.groupRoles.nombre=nombre;
    this.groupRoles.roles=roles; 
    const dialogRef = this.dialogService.open(GroupRoleEditDialogComponent, {
      height: '50rem',
      width: '60rem',
      data:this.groupRoles
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.getGroupsRoles();
      } 
    });
  }
}
