import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from './habit';
import {CompletedDate } from './completeddate';
import { Observable } from 'rxjs/Rx';
import { SelectItem, Message } from 'primeng/primeng';
import { DataTableModule, DialogModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/primeng';
import {UIChart} from "primeng/primeng";
import { Location } from '@angular/common';


@Component({
    selector:'linechart',
    templateUrl: './linechartdemo.html'
})

export class LineChartDemo implements OnInit {
    @ViewChild('chart') private chart;
    data: any;    
    msgs: Message[];
    habits:Habit[];
    completedDates:CompletedDate[];   
    averageProductivityScore:number;
    notEnoughData:String;

    constructor(private habitService:HabitService,
                private location:Location
    ) {      
        
    }

    ngOnInit():void{
        this.createLineChart();          
    }

    

    createLineChart(){
        this.habitService.getdbCompletedDates().subscribe(dates => {
            this.completedDates = dates;
            let weeklyDates:Array<CompletedDate> = new Array<CompletedDate>();
            let totalProductiveScore:number = 0;

            if(this.completedDates.length >= 7){


            
             for( var i = this.completedDates.length-7; i<this.completedDates.length; i++){
                totalProductiveScore +=this.completedDates[i].percentCompleted; 
                weeklyDates.push(this.completedDates[i]);
             }
             
               for(let entry of this.completedDates){
                     totalProductiveScore += entry.percentCompleted; 
             }
             this.averageProductivityScore = totalProductiveScore / (this.completedDates.length + 1);




    this.data = { 
            labels: [weeklyDates[0].date, weeklyDates[1].date, weeklyDates[2].date, weeklyDates[3].date, weeklyDates[4].date, weeklyDates[5].date, weeklyDates[6].date],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [weeklyDates[0].percentCompleted, weeklyDates[1].percentCompleted, weeklyDates[2].percentCompleted, weeklyDates[3].percentCompleted, weeklyDates[4].percentCompleted, weeklyDates[5].percentCompleted, weeklyDates[6].percentCompleted],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                // {
                //     label: 'Second Dataset',
                //     data: [28, 48, 40, 19, 86, 27, 90],
                //     fill: false,
                //     borderColor: '#565656'
                // }
            ]
        }      
    }
    else
    this.notEnoughData="NOT ENOUGH DATA";    
  })

      

    }

    getAverageProductiveScore(){
        //Store all completeddates in an arrayy. 
        //Pull all scores out and create average
        //Bind to this value and display in the UI
    }

    selectData(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }

    goBack(): void {
        this.location.back();
}    

}