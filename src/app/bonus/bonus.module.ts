import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonusPageRoutingModule } from './bonus-routing.module';

import { BonusPage } from './bonus.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonusPageRoutingModule,
    SharedModule
  ],
  declarations: [BonusPage]
})
export class BonusPageModule {}
