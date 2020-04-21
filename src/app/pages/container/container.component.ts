import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  public isAuth = false;
  ngOnInit(): void {
    this.authService.notify().subscribe((res) => {
      this.isAuth = this.authService.isAuthenticate();
    });
  }
}
