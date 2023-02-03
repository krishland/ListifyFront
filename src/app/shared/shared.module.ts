import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';
import { ColumnComponent } from './components/column/column.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BtnComponent,
    CardComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    BtnComponent,
    CardComponent,
    ColumnComponent
  ]
})
export class SharedModule { }
