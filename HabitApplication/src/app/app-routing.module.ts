import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitComponent } from './habit.component';
import { LineChartDemo } from './linechartdemo';

const routes: Routes = [
    { path: '', redirectTo: '/linechart',pathMatch:'full'},
    { path: 'habits', component:HabitComponent },
    { path: 'linechart', component:LineChartDemo }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}
