import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isFirstDropdownOpen = false;
  isSecondDropdownOpen = false;
  isThirdDropdownOpen = false;

  toggleDropdown(event: MouseEvent, dropdown: string): void {
    event.preventDefault();
    if (dropdown === 'first') {
      this.isFirstDropdownOpen = !this.isFirstDropdownOpen;
      this.isSecondDropdownOpen = false; // Close other dropdown if open
    } else if (dropdown === 'second') {
      this.isSecondDropdownOpen = !this.isSecondDropdownOpen;
      this.isFirstDropdownOpen = false; // Close other dropdown if open
    } else if (dropdown === 'third') {
      this.isThirdDropdownOpen = !this.isThirdDropdownOpen;
      this.isFirstDropdownOpen = false; // Close other dropdown if open
    }
  }
  
  @HostListener('document:click', ['$event.target'])
  onDocumentClick(targetElement: HTMLElement): void {
    const clickedInsideFirstDropdown = targetElement.closest('.dropdown.first');
    const clickedInsideSecondDropdown = targetElement.closest('.dropdown.second');
    const clickedInsideThirdDropdown = targetElement.closest('.dropdown.third');

    // Close dropdowns if the click is outside both
    if (!clickedInsideFirstDropdown && !clickedInsideSecondDropdown && !clickedInsideThirdDropdown) {
      this.isFirstDropdownOpen = false;
      this.isSecondDropdownOpen = false;
      this.isThirdDropdownOpen = false;
    }
  }
  
}
