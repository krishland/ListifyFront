import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() etat!: string;

  @HostBinding("class") tdClassName!: string;

  constructor() {
    this.tdClassName = `state-${this.etat}`
  }

  ngOnChanges() {
    this.tdClassName = `state-${this.etat.toLowerCase().split(" ").join("")}`
    console.log(this.tdClassName)
    //console.log(this.etat)
  }
}
