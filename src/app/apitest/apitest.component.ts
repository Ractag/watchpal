import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apitest',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './apitest.component.html',
  styleUrl: './apitest.component.scss'
})
export class ApitestComponent implements OnInit {

  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }

}
