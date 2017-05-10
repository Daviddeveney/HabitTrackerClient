import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HabitComponent } from './habit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HabitService } from './habit.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import {LineChartDemo} from './linechartdemo';
import { DataTableModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/primeng';
import { GrowlModule, SharedModule, DialogModule } from 'primeng/primeng';

@NgModule({
  imports:      [  BrowserModule,
                   AppRoutingModule,
                   FormsModule,     
                   DataTableModule, 
                   SharedModule,
                   DialogModule,
                   GrowlModule,
                   DialogModule,
                   ChartModule,   
                   BrowserAnimationsModule,
                   HttpModule,
                   FormsModule,
                   NgbModule.forRoot()
                  //  InMemoryWebApiModule.forRoot(InMemoryDataService)
                    ],
  declarations: [ AppComponent, HabitComponent, LineChartDemo],
  bootstrap:    [ AppComponent ],
  providers:    [ HabitService ]
})
export class AppModule { }
