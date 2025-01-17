import { Observable } from "rxjs/Observable";
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean>
        | Promise<boolean> | boolean {

        return component.canDeactivate();
    }
}