import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.css']
})
export class EmailConfirmedComponent implements OnInit {

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


navigateToLogin(){

}

}
