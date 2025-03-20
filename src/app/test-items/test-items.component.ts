import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-items',
  imports: [],
  templateUrl: './test-items.component.html',
  styleUrl: './test-items.component.css'
})
export class TestItemsComponent {
  isLoggedIn = true;
}
