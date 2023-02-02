import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';
import { ColumnComponent } from './components/column/column.component';



@NgModule({
  declarations: [
    BtnComponent,
    CardComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnComponent,
    CardComponent,
    ColumnComponent
  ]
})
export class SharedModule { }
