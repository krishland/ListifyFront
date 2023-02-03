import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconChevronDownComponent } from './components/icon-chevron-down/icon-chevron-down.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconEditComponent,
    IconChevronDownComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    IconEditComponent,
    IconChevronDownComponent
  ]
})
export class IconsModule { }
