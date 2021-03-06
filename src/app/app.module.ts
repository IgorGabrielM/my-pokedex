import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {NbCardModule, NbDialogModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {ActionDialogComponent} from "./pokemon-list/action-dialog/action-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    ActionDialogComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot({name: 'default'}),
    NgxPaginationModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
