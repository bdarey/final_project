import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {

  constructor(public _appUser : AppUserService, private router: Router) { }

  ngOnInit() {
  }

}
