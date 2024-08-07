import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApitestComponent } from "./apitest/apitest.component";

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[],
  imports: [RouterOutlet, ApitestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'watchpal';
}
