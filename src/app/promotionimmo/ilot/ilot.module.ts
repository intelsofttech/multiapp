import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { IlotPageRoutingModule } from './ilot-routing.module';

import { IlotPage } from './ilot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	HttpClientModule, 
	ReactiveFormsModule,
    IlotPageRoutingModule
  ],
  declarations: [IlotPage]
})
export class IlotPageModule {}
