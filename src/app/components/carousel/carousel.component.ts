import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    './site-1.jpg', // Replace with your actual image paths
    './site-2.jpg',
    './site-3.jpg',
  ];
  listOfImages: any[] = [
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
  currentIndex: number = 0;
  autoSlideInterval: any; // To store the interval reference
  isAnimating: boolean = true; // For smooth transition effects

  products: any[] = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    }];
  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  // Start the automatic sliding
  startCarousel(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Slide every 3 seconds
  }

  // Stop the sliding on hover
  stopCarousel(): void {
    clearInterval(this.autoSlideInterval);
  }

  // Move to the next slide
  nextSlide(): void {
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Move to the previous slide
  prevSlide(): void {
    this.isAnimating = true;
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';    
      default:
        return 'contrast';
    }
  }
}
