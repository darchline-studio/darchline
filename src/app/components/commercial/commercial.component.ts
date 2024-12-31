import { Component } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrl: './commercial.component.scss',
})
export class CommercialComponent {
  commercials: any[] = [
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg', title: 'Commercial 1', description: 'Commercial ' }, 
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg', title: 'Commercial 2', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg' , title: 'Commercial 3', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg' , title: 'Commercial 4', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg' , title: 'Commercial 5', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg' , title: 'Commercial 6', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg' , title: 'Commercial 7', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg' , title: 'Commercial 8', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg' , title: 'Commercial 9', description: 'Commercial ' },
    { image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg' , title: 'Commercial 10', description: 'Commercial ' },
   ];
}
