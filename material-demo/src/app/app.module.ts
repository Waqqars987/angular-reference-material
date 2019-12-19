import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { BadgeComponent } from './badge/badge.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconComponent } from './icon/icon.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxAndRadioComponent } from './checkbox-and-radio/checkbox-and-radio.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent, CustomSnackBarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DataTableComponent } from './data-table/data-table.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import { DialogExampleComponent } from './dialog/dialog-example/dialog-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypographyComponent,
    ToggleButtonComponent,
    BadgeComponent,
    SpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    IconComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxAndRadioComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DataTableComponent,
    VirtualScrollingComponent,
    CustomSnackBarComponent,
    DialogExampleComponent
  ],
  entryComponents: [
    CustomSnackBarComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
