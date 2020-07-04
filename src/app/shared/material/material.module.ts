import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const modules = [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
]
@NgModule({
  imports: [
    modules,
  ],
  exports:[
    modules,
  ]
})
export class MaterialModule { }
