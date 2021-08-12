import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  constructor(private _router: Router) {}

  goThere(): void {
    this._router.navigateByUrl('test2');
  }

  ngOnInit(): void {}
}
