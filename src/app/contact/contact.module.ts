import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contactform.component';
import { ContactS1Component } from './contact-s1/contact-s1.component';
import { ContactS2Component } from './contact-s2/contact-s2.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactS1Component,
    ContactS2Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
