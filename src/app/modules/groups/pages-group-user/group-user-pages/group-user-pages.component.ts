import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroupUserAssignment } from '@core/interfaces/i-group';
import { GroupService } from '@modules/groups/services';
import { GroupUserEditDialogComponent } from '../group-user-edit-dialog/group-user-edit-dialog.component';

@Component({
  selector: 'app-group-user-pages',
  templateUrl: './group-user-pages.component.html',
  styleUrls: ['./group-user-pages.component.scss']
})
export class GroupUserPagesComponent {
  hide = true;
  public passwordType = 'password';
  public loading = false;
  
  displayedColumns: string[] = ['id', 'nombre', 'usuarios', 'options'];
  dataSource: MatTableDataSource<IGroupUserAssignment>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  groupRoles:IGroupUserAssignment={
    id:0,
    nombre:'',
    usuarios:[]
  }
  constructor(private groupService:GroupService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this.getGroupUsers();
  }

  getGroupUsers(){
    this.groupService.getGroupsUsers().subscribe(data=>{
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

  editar(id: string, nombre: string, usuarios:[]) {
    this.groupRoles.id=Number(id);
    this.groupRoles.nombre=nombre;
    this.groupRoles.usuarios=usuarios; 
    
    const dialogRef = this.dialogService.open(GroupUserEditDialogComponent, {
      height: '50rem',
      width: '60rem',
      data:this.groupRoles
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.getGroupUsers();
      } 
    });
  }
}
