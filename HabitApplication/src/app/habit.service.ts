import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { Habit } from './habit';
import { Observable} from 'rxjs/Rx';
import { CompletedDate } from './completeddate';
import 'rxjs/add/operator/map'
@Injectable()
    export class HabitService {

        exampleHabits: Habit;
        example:String = 'EXAMPLE BITCHES';
        private habitsUrl = "api/habits";
        private Headers = new Headers({'Content-Type': 'application/json'});
        constructor(private http:Http){}

        getHabits():Observable<Habit[]>{   
         return this.http.get(this.habitsUrl)
            .map(this.extractData)
            
        }

        getdbHabits():Observable<Habit[]>{
              return this.http.get('http://localhost:8080/api/gethabits') 
                         .map(this.extractData) 
                         .catch((error:any) => Observable.throw( 'Server error'));
        }

        getdbCompletedDates():Observable<CompletedDate[]>{
            return this.http.get('http://localhost:8080/api/getdbcompleteddates')
                .map(this.extractData)
                .catch((error:any) => Observable.throw( 'Server error'));                
        }

        saveCompletedDate(completedPercentage:number){
            let example:number = 44.44;
            return this.http.post('http://localhost:8080/api/save',completedPercentage)
            .map(this.extractData)
            .catch((error:any) => Observable.throw( 'Server error'));
            
        }

        private extractData(res: Response){
            let body = res.json();
            return body|| {};
        }
            
        

    }