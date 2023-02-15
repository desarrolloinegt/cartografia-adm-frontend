import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGroup } from '@core/interfaces/i-group';
import { IProjectUserAssingment } from '@core/interfaces/i-project';
import { IUpmUserAssignment } from '@core/interfaces/i-upm';
import { GroupService } from '@modules/groups';
import { ExcelService } from '@modules/project-home/services/excel.service';
import { ProjectHomeService } from '@modules/project-home/services/project-home.service';
import { ProjectService } from '@modules/project/services/project.service';
import { IUserList } from '@core/interfaces/i-user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encargado-upms',
  templateUrl: './encargado-upms.component.html',
  styleUrls: ['./encargado-upms.component.scss']
})
export class EncargadoUpmsComponent {
  groups!: IGroup[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  users: IUserList[] = []
  dataSource: MatTableDataSource<IGroup>;
  displayedColumns: string[] = ['encargado', 'upm', 'options'];
  datos:IUpmUserAssignment[]=[
  ];

  userUpm:IUpmUserAssignment={
    personal:'',
    upm:''
  };
  nameUpms: string[] = [];
  idProject!: number;
  projectUserAssignment: IProjectUserAssingment = {
    usuario_id: 0,
    proyecto_id: 0
  }
  constructor(private groupService: GroupService, private projectHomeService: ProjectHomeService, private projectService: ProjectService,private excelService:ExcelService) {
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit() {
    let idUsuario = localStorage.getItem('id');
    if (Number(idUsuario)) {
      this.projectUserAssignment.usuario_id = Number(idUsuario);
      this.projectHomeService.getIdProject(localStorage.getItem('project') || '').subscribe(data => {
        this.projectUserAssignment.proyecto_id = data;
        this.idProject=data;
        this.getGroupsMinor();
      });
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  async getGroupsMinor() {
    this.groupService.getGroupsMinor(this.projectUserAssignment).subscribe(data => {
      this.groups = data;
    });
  }

  async cargarUpmsAsignadas(grupo:string) {
    let str=grupo.split(",");
    this.groupService.getGroupsUsers(Number(str[0])).subscribe(data => {
      this.users = data;
      this.users.forEach(data => {
        //this.users.push({ encargado: '',usuario: data.username });
      })});
    if (Number(this.idProject)) {
      this.projectService.getUpms(this.idProject).subscribe(resp => {
        resp.forEach((element:any) => {
          this.nameUpms.push(element.upm);
        });
        this.createFile();
      });
    }
  }

  createFile() {
    this.datos=[];
    for (let index = 0; index < this.nameUpms.length; index++) {
      this.userUpm={
        personal:' ',
        upm:this.nameUpms[index]
      }
      this.datos.push(this.userUpm);
    }
    this.excelService.exportAsExcelFile(this.datos,'AsignacionUPMS');
  }
  async addFile() {
    const { value: file } = await Swal.fire({
      title: 'Seleccione archivo',
      input: 'file',
      inputAttributes: {
        'accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    })

    if (file) {
      /*const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.generateJson();*/
    }
    //reader.readAsBinaryString(file);
  }
}
