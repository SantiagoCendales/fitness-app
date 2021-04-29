import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { InterceptorProviders } from './interceptors';

import { CoreComponent } from './core.component';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    InterceptorProviders
  ]
})

export class CoreModule { }
