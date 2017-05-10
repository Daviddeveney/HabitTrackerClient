import { Component, OnInit, Input } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from './habit';
import {CompletedDate } from './completeddate';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
    selector:'habit',
    templateUrl: './habit.component.html',
    styles: ['./habit.component.css']
})

export class HabitComponent implements OnInit {

constructor(private habitService:HabitService,
            private router:Router
){}

@Input()
habit: Habit = new Habit();

progressPercentage: number;
completedDate:CompletedDate;
count:number = 0;
david: String;
habits: Habit[];
checked(habit:Habit):void{
    this.habit = habit;

}

displayArray(){
    for(var i = 0; i <this.habits.length; i ++){
        var count;
        if(this.habits[i].completed === true)
        this.count ++;
    }
    this.progressPercentage = (this.count/this.habits.length)*100;
    this.habitService.saveCompletedDate(this.progressPercentage)
    .subscribe(message => {this.david = message
        
     });
        this.count = 0;     
}

// getHabits():void{    
//     this.habitService.getHabits()
//         .subscribe(
//             habits => this.habits = habits
//         )    
// }

getDbHabits():void{    
    this.habitService.getdbHabits()
        .subscribe(habits =>{ this.habits = habits; 
    });
}

gotoAnalyticsPage():void{
    this.router.navigate(['/linechart']);
}


//  this.heroService.getHeroes()
//                    .subscribe(
//                      heroes => this.heroes = heroes,
//                      error =>  this.errorMessage = <any>error);


ngOnInit():void{
    // this.getHabits();
    this.getDbHabits();
}

}