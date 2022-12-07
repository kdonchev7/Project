import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IGames } from 'src/app/shared/interfaces/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  gamesList: IGames[] | null = null;
  errorFetcingData = false;

  get isLoggedIn() {
    return this.authService.isLoggedIn()
  }

  constructor(private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.apiService.loadData().subscribe({
  //     next: (value) => {
  //       this.gamesList = value;
  //     },
  //     error: (err) => {
  //       this.errorFetcingData = true;
  //       console.error(err);
  //     }
  //   });
  // }
}
