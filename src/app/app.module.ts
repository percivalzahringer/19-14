import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LudiComponent } from './ludi/ludi.component';
import { RazrabComponent } from './razrab/razrab.component';
import { MainComponent } from './main/main.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Mian2Component } from './mian2/mian2.component';
import { PeepolComponent } from './peepol/peepol.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PeepAddComponent } from './peep-add/peep-add.component';
import { PeepEditComponent } from './peep-edit/peep-edit.component';
import { NzModalModule } from 'ng-zorro-antd/modal';







registerLocaleData(en);


export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Main', component: MainComponent },
  { path: 'City', component: LudiComponent },
  { path: 'Me', component: RazrabComponent },
  { path: 'Edit', component: Mian2Component },
  { path: 'Peepol', component: PeepolComponent },
  { path: 'PeepAdd', component: PeepAddComponent },
  { path: 'PeepEdit/:id', component: PeepEditComponent },

  
];
@NgModule({
  declarations: [
    AppComponent,
    LudiComponent,
    RazrabComponent,
    MainComponent,
    Mian2Component,
    PeepolComponent,
    PeepAddComponent,
    PeepEditComponent,
 
    
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes), 
    FormsModule, HttpClientModule, 
    BrowserAnimationsModule,
    NzTypographyModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzImageModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzInputModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule
    
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
 