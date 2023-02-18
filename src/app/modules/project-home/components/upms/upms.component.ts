import { Component, ViewChild, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssignmentUpmProject, AssignmentUpmProjectSustituir } from '@core/interfaces/i-upm';
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

  assignment: AssignmentUpmProject = {
    proyecto_id: 0,
    upms: []
  };
  upmDataSust: AssignmentUpmProjectSustituir = {
    proyecto_id: 0,
    upm_nuevo: '',
    upm_anterior: 0,
    descripcion:'',
    usuario_id:0
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

  cargarUpmsAsignadas() {
    if (this.idProject != 0) {
      this.projectService.getUpms(this.idProject).subscribe(resp => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }

  }

  async addUpm() {
    const { value: upm } = await Swal.fire({
      title: 'UPM',
      input: "text",
      inputPlaceholder: "AEE001122337A2",
      confirmButtonText: 'Agregar UPM',
      showCancelButton: true,
      inputLabel: 'Ingrese la UPM',
    })
    if (upm) {
      this.assignment.proyecto_id = this.idProject;
      this.assignment.upms = [upm];
      this.projectService.assignUpmToProject(this.assignment).subscribe(resp => {
        if (resp.status == true) {
          this.cargarUpmsAsignadas();
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
  }

  async sustituirUpm(id: string) {
    this.upmDataSust.proyecto_id = this.idProject;
    this.upmDataSust.upm_anterior = Number(id);
    const { value: formValues } = await Swal.fire({
      title: 'Sustituir upms',
      html:
        '<span>Ingrese el upm</span>'+
        '<input type="text" style="width:80%;"  placeholder="AEE123456789A1" id="upm" class="swal2-input">' +
        '<br>'+
        '<span>Ingrese el motivo de sustitucion</span>'+
        '<textarea id="descripcion" style="width:80%;" placeholder="No se puede acceder al lugar" class="swal2-input"></textarea>',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      preConfirm: () => {
        return [
          document.getElementById('upm'),
          document.getElementById('descripcion')
        ]
      }
    })
    if (formValues) {
      let upm=(formValues[0] as HTMLInputElement).value
      let descripcion=(formValues[1] as HTMLInputElement).value
      this.upmDataSust.upm_nuevo = upm;
      this.upmDataSust.descripcion=descripcion;
      this.upmDataSust.usuario_id=Number(localStorage.getItem('id'));
      this.projectService.sustituirUpm(this.upmDataSust).subscribe(resp => {
        if (resp.status == true) {
          this.cargarUpmsAsignadas();
          Swal.fire('Ok!', resp.message, 'success');
        }
      });
    }
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
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        /* save data */
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.generateJson();
      }
      reader.readAsBinaryString(file);
    }
  }


  generateJson() {
    if (this.idProject) {
      this.assignment.proyecto_id = this.idProject;

      this.data.forEach(dto => {
        this.assignment.upms.push(dto.toString());
      })

    }
    this.assignment.upms=this.assignment.upms.filter(Boolean);
    console.log(this.assignment)
    this.projectService.assignUpmToProject(this.assignment).subscribe((resp) => {
      if (resp.status == true) {
        this.cargarUpmsAsignadas();
        Swal.fire('Ok!', resp.message, 'success');
      }
    });
  }

  verDetalles(id:String){
    if (Number(id)) {
      this.homeProjectService.verDetalleSustitucion(Number(id)).subscribe(resp=>{
        Swal.fire({
          title: 'Descripcion',
          html:`UPM nuevo: <b>${resp.nombre}</b>, ` +
          `<br><span>Usuario modificador: ${resp.codigo_usuario}</span> ` +
          `<br><span>Fecha: ${resp.fecha}</span> `+
          `<br><p>Motivo: ${resp.descripcion}</p>`,
        });
      })
    }
  }
}

