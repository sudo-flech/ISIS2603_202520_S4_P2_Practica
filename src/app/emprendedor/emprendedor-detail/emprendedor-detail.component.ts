import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';
import { ActivatedRoute } from '@angular/router';
import { EmprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {

  constructor(private route: ActivatedRoute, private emprendedorService: EmprendedorService) {}
  
  // Lista de emprendedores detallados quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedores: Array<EmprendedorDetail> = []

  @Input() emprendedor: Emprendedor | null = null;
  emprendedorDetail: EmprendedorDetail | null = null;

  // Cuando el componente recibe un nuevo emprendedor, busca su detalle en la lista quemada
  // notese que esto es solo un placeholder hasta que implementen el servicio y el API
  ngOnChanges(): void {
    if (this.emprendedor) {
      this.emprendedorDetail = this.emprendedores.find(e => e.id === this.emprendedor!.id) || null;
    }
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.emprendedorService.getEmprendedorDetailed(id).subscribe(data => {
        this.emprendedor = data;
      })
    }
  }

}
