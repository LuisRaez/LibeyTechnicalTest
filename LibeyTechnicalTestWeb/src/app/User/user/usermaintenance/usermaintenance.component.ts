import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { LibeyUserService } from 'src/app/core/service/libeyuser/libeyuser.service';
import { UbigeoService } from 'src/app/core/service/ubigeo/ubigeo.service';
import { LibeyUser } from 'src/app/entities/libeyuser';
import { Region } from 'src/app/entities/region';
import { Ubigeo } from 'src/app/entities/ubigeo';
import { Province } from 'src/app/entities/province';
import { DocumentType } from 'src/app/entities/documenttype';
import { DocumenttypeService } from 'src/app/core/service/documenttype/documenttype.service';
import { RegionService } from 'src/app/core/service/region/region.service';
import { ProvinceService } from 'src/app/core/service/province/province.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {

  libeyUserForm!: FormGroup;
  documentTypes: DocumentType[] = [];
  regions: Region[] = [];
  provinces: Province[] = [];
  ubigeos: Ubigeo[] = [];
  provinceDisabled = true;
  ubigeoDisabled = true;

  selectedRegionCode: string = '';
  selectedProvinceCode: string = '';
  selectedUbigeoCode: string = '';

  constructor(
    private fb: FormBuilder,
    private libeyUserService: LibeyUserService,
    private documentTypeService: DocumenttypeService,
    private ubigeoService: UbigeoService,
    private regionService: RegionService,
    private provinceService: ProvinceService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    
    this.libeyUserForm = this.fb.group({
      documentNumber: ['', Validators.required],
      documentTypeId: ['',Validators.required],
      name: ['', Validators.required],
      fathersLastName: ['', Validators.required],
      mothersLastName: ['', Validators.required],
      address: ['', Validators.required],
      regionCode: ['',Validators.required],
      provinceCode: [ '',Validators.required],
      ubigeoCode: ['',Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      active: [true]
    });
    this.loadDocumentTypes();
    this.loadRegions();
  }

  // Métodos de carga
  loadDocumentTypes(): void {
    this.documentTypeService.FindAll().subscribe(
      (response: any) => {
        this.documentTypes = response.datos;
      },
      (error) => {
        swal.fire('Error', 'No se pudieron cargar los tipos de documento.', 'error');
      }
    );
  }

  loadRegions(): void {
    this.regionService.FindAll().subscribe(
      (response: any) => {
        this.regions = response.datos;
      },
      (error) => {
        swal.fire('Error', 'No se pudieron cargar las regiones.', 'error');
      }
    );
  }

  onRegionChange(selectedRegion: any): void {
    const regionCode = selectedRegion.regionCode
    
    this.provinces = []
    this.ubigeos = []


    this.provinceService.GetByRegion(regionCode).subscribe(
      (response: any) => {
        this.provinces = response.datos;
        this.libeyUserForm.controls['provinceCode'].setValue('');
        this.libeyUserForm.controls['ubigeoCode'].setValue('');
        this.provinceDisabled = false;
    this.ubigeoDisabled = true
        this.selectedRegionCode = regionCode
      },
      (error) => {
        swal.fire('Error', 'No se pudieron cargar las provincias.', 'error');
      }
    );
  }

  onProvinceChange(selectedProvince: any): void {
    const regionCode = selectedProvince.regionCode
    const provinceCode = selectedProvince.provinceCode
    
    this.ubigeos = []

    this.ubigeoService.GetByRegionAndProvince(regionCode, provinceCode).subscribe(
      (response: any) => {
        this.ubigeos = response.datos;
        this.libeyUserForm.controls['ubigeoCode'].setValue('');
        this.ubigeoDisabled = false;
        this.selectedProvinceCode = provinceCode
      },
      (error) => {
        swal.fire('Error', 'No se pudieron cargar los ubigeos.', 'error');
      }
    );
  }

  submit(): void {
    console.log(this.libeyUserForm)
    if (this.libeyUserForm.valid) {
      const user: LibeyUser = this.libeyUserForm.value;

      this.libeyUserService.Create(user);
      swal.fire('Success', 'Usuario Creado Exitosamente', 'success');
          this.Clear();
    } else {
      swal.fire('Oops!', 'Por favor, complete todos los campos obligatorios.', 'error');
    }
  }

  Clear(): void {
    // Restablece los valores del formulario a su estado inicial
    this.libeyUserForm.reset();
  
    // Limpia las listas relacionadas
    this.provinces = [];
    this.ubigeos = [];
  
    // Deshabilita los controles dependientes
    this.libeyUserForm.controls['provinceCode'].disable();
    this.libeyUserForm.controls['ubigeoCode'].disable();
  
    // Restablece los flags de deshabilitación
    this.provinceDisabled = true;
    this.ubigeoDisabled = true;
  }
  
  




  return(): void {
    this.router.navigate(['/user/card']);
  }
  
  
}

