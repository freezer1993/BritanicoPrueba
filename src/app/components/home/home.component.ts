import { Component, AfterViewInit } from '@angular/core'
declare var $: any; // Asegúrate de que jQuery esté disponible

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  public slideImages: string[] = [];

  ngAfterViewInit() {


    $('#owl-carousel-secundario').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });

  }

  openModal(section: string) {
    
    // Establecer imágenes según la sección
    switch (section) {
      case 'CARDIOLOGIA':
        this.slideImages = [
          './assets/images/cardiologia/cardio_1.jpg',
          './assets/images/cardiologia/cardio_2.jpg',
          './assets/images/cardiologia/cardio_3.jpg'
        ];
        break;
      case 'QUIROFANO':
        this.slideImages = [
          './assets/images/quirofano/quirofano1.jpg',
          './assets/images/quirofano/quirofano2.jpg',
          './assets/images/quirofano/quirofano3.jpg'
        ];
        break;
      case 'CENTRO DE DIAGNOSTICO':
        this.slideImages = [
          './assets/images/centro_diagnostico/centro_diagnostico_1.jpg',
          './assets/images/centro_diagnostico/centro_diagnostico_2.jpg',
          './assets/images/centro_diagnostico/centro_diagnostico_4.jpg'
        ];
        break;
      case 'INTERNACION':
        this.slideImages = [
          './assets/images/internados/internacion1.jpg',
          './assets/images/internados/internacion2.jpg',
          './assets/images/internados/internacion3.jpg'
        ];
        break;
      case 'EL SANATORIO':
        this.slideImages = [
          './assets/images/sanatorio/sanatorio1.jpg',
          './assets/images/sanatorio/sanatorio2.jpg',
          './assets/images/sanatorio/sanatorio5.jpg'
        ];
        break;
      case 'CENTRO PEDIATRICO':
        this.slideImages = [
          './assets/images/centro_pediatrico/centro_pediatrico_1.jpg',
          './assets/images/centro_pediatrico/centro_pediatrico_4.jpg',
          './assets/images/centro_pediatrico/centro_pediatrico_5.jpg'
        ];
        break;
    }

    alert("entro");

    // Actualizar el título del modal
    document.getElementById('imageModalLabel')!.innerText = section;
  
    // Abrir el modal
    $('#imageModal').modal('show');
  }

  closeModal() {
    // Cerrar el modal usando jQuery
    $('#imageModal').modal('hide');
  }
}

