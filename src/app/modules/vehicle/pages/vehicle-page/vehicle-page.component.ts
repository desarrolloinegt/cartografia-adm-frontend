import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IVehicle } from '@core/interfaces/i-vehicle';
import { VehicleService } from '@modules/vehicle/services';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss'],
})
export class VehiclePageComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['license', 'model', 'year', 'options'];
  vehicleData: IVehicle = {
    license: '',
    model: '',
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

  cargarVehiculo() {
    this.vehicleService.getVehicle().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
