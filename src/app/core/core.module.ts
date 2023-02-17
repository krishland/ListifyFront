import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [UiModule, HeaderComponent],
})
export class CoreModule {}
