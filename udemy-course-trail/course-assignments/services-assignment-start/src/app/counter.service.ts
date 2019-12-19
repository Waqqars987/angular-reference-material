import { Injectable } from "@angular/core";

//new way for providing application wide access for a serviec in angular 6+ 
@Injectable({ providedIn: 'root' })   
  
export class CounterService {

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
    }
}