import { FakeService } from './fake.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { TdFormComponent } from './td-form/td-form.component';
import { MdFormComponent } from './md-form/md-form.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { EmployeeRetrieveComponent } from './employee-retrieve/employee-retrieve.component';
import { EmployeeStoreComponent } from './employee-store/employee-store.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DataBindingComponent,
    DirectiveDemoComponent,
    TdFormComponent,
    MdFormComponent,
    ServiceComponentComponent,
    EmployeeRetrieveComponent,
    EmployeeStoreComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
