
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'darchline-studio';

  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Router',
    //     icon: 'pi pi-palette',
    //     items: [
    //       {
    //         label: 'Installation',
    //         route: '/installation'
    //       },
    //       {
    //         label: 'Configuration',
    //         route: '/configuration'
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Programmatic',
    //     icon: 'pi pi-link',
    //     // command: () => {
    //     //   this.router.navigate(['/installation']);
    //     // }
    //   },
    //   {
    //     label: 'External',
    //     icon: 'pi pi-home',
    //     items: [
    //       {
    //         label: 'Angular',
    //         url: 'https://angular.io/'
    //       },
    //       {
    //         label: 'Vite.js',
    //         url: 'https://vitejs.dev/'
    //       }
    //     ]
    //   }
    // ];
    this.items = [
      {
          label: 'Furniture',
          icon: 'pi pi-box',
          items: [
              [
                  {
                      label: 'Living Room',
                      items: [
                          { label: 'Accessories' },
                          { label: 'Armchair' },
                          { label: 'Coffee Table' },
                          { label: 'Couch' },
                          { label: 'TV Stand' },
                      ],
                  },
              ],
              [
                  {
                      label: 'Kitchen',
                      items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                  },
                  {
                      label: 'Bathroom',
                      items: [{ label: 'Accessories' }],
                  },
              ],
              [
                  {
                      label: 'Bedroom',
                      items: [
                          { label: 'Bed' },
                          { label: 'Chaise lounge' },
                          { label: 'Cupboard' },
                          { label: 'Dresser' },
                          { label: 'Wardrobe' },
                      ],
                  },
              ],
              [
                  {
                      label: 'Office',
                      items: [
                          { label: 'Bookcase' },
                          { label: 'Cabinet' },
                          { label: 'Chair' },
                          { label: 'Desk' },
                          { label: 'Executive Chair' },
                      ],
                  },
              ],
          ],
      },
      {
          label: 'Electronics',
          icon: 'pi pi-mobile',
          items: [
              [
                  {
                      label: 'Computer',
                      items: [
                          { label: 'Monitor' },
                          { label: 'Mouse' },
                          { label: 'Notebook' },
                          { label: 'Keyboard' },
                          { label: 'Printer' },
                          { label: 'Storage' },
                      ],
                  },
              ],
              [
                  {
                      label: 'Home Theater',
                      items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                  },
              ],
              [
                  {
                      label: 'Gaming',
                      items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                  },
              ],
              [
                  {
                      label: 'Appliances',
                      items: [
                          { label: 'Coffee Machine' },
                          { label: 'Fridge' },
                          { label: 'Oven' },
                          { label: 'Vaccum Cleaner' },
                          { label: 'Washing Machine' },
                      ],
                  },
              ],
          ],
      },
      {
          label: 'Sports',
          icon: 'pi pi-clock',
          items: [
              [
                  {
                      label: 'Football',
                      items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                  },
              ],
              [
                  {
                      label: 'Running',
                      items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                  },
              ],
              [
                  {
                      label: 'Swimming',
                      items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                  },
              ],
              [
                  {
                      label: 'Tennis',
                      items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                  },
              ],
          ],
      },
  ]; 
  }
}