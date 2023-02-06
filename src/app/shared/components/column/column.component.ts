import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/core/enums/state';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {



  @Input() states: State[] = Object.values(State);

  constructor() { }

  ngOnInit(): void {
  }

}
