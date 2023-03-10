import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() route!: string;
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() styleBtn!: string;

  constructor() {}

  ngOnInit(): void {}
}
