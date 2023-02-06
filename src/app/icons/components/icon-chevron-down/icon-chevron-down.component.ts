import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-chevron-down',
  templateUrl: './icon-chevron-down.component.html',
  styleUrls: ['./icon-chevron-down.component.scss']
})
export class IconChevronDownComponent implements OnInit {

  public myIcon = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
