import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    StudentPageRoutingModule
  ],
  declarations: [StudentPage]
})
export class StudentPageModule {}
