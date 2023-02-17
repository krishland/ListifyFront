import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';

import { RouterModule } from '@angular/router';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [BtnComponent, CardComponent, StateDirective],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent, CardComponent, StateDirective],
})
export class SharedModule {}
