import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let habits = [
            {id:1, task: "Wake up by 7:30am"},
            {id:2, task: "Morning Stretch"},
            {id:3, task: "Crunches and Pull Ups"},
            {id:4, task: "Weight Room for 2 Lifts"},
            {id:5, task: "Rocky's Walk"},
            {id:6, task: "Protein + Probiotics + Cook Lunch"},
            {id:7, task: "Make Stand Up Meeting"},
            {id:8, task: "Read 5 Pages of Javascript Book + Notes"},
            {id:9, task: "Rocky Walk at Lunch + Call Jordan"},
            {id:10, task:"Leave work at 6:00"},
            {id:11, task:"Play with Rocky Outside"},
            {id:12, task:"Code until 10:00"},
            {id:13, task:"Work on Jordans stuff until 11:15"}
        ];
        return {habits};
    }
}