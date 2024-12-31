import { Component } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.scss'
})
export class ApartmentComponent {
  apartments: any[] = [
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg', title: 'Apartment1', description: 'Apartment' }, 
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg', title: 'Apartment2', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg' , title: 'Apartment3', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg' , title: 'Apartment4', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg' , title: 'Apartment5', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg' , title: 'Apartment6', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg' , title: 'Apartment7', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg' , title: 'Apartment8', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg' , title: 'Apartment9', description: 'Apartment' },
  { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg' , title: 'Apartment10', description: 'Apartment' },
 ];
}
