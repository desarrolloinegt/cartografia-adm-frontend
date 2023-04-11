import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IVehicle } from '@core/interfaces/i-vehicle';
import { VehicleService } from '@modules/vehicle/services';
import Swal from 'sweetalert2';
import { NewVehiclePageComponent } from '../new-vehicle-page';
import { VehicleEditDialogComponent } from '../vehicle-edit-dialog';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss'],
})
export class VehiclePageComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['placa', 'modelo', 'year', 'options'];
  vehicleData: IVehicle = {
    id: 0,
    placa: '',
    modelo: '',
    year: '',
  };

  constructor(private vehicleService: VehicleService, public dialogService: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnInit() {
    this.cargarVehiculo();
  }

  open() {
    const dialogRef = this.dialogService.open(NewVehiclePageComponent, {
      height: '30rem',
      width: '50rem',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==1){
        this.cargarVehiculo();
      } 
    });
  }

  cargarVehiculo() {
    this.vehicleService.getVehicle().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
    });
  }

  editar(id: number, placa: string,  modelo:string, year:string) {
    this.vehicleData.id = id;
    this.vehicleData.placa=placa;
    this.vehicleData.modelo = modelo;
    this.vehicleData.year = year;
    const dialogRef = this.dialogService.open(VehicleEditDialogComponent, {
      height: '30rem',
      width: '50rem',
      data: this.vehicleData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===1){
        this.cargarVehiculo();
      } 
    });
  }

  desactivar(id: number, modelo: string) {
    Swal.fire({
      title: '¿Está seguro que desea desactivar el vehículo: ' + modelo + '?',
      text: "¡Esta acción no se podrá revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehicleService.desactiVehicle(Number(id)).subscribe((resp) => {
          if (resp.status == true) {
            this.cargarVehiculo();
            Swal.fire('Ok!', resp.message, 'success')  
          }
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }
}
