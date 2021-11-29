import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('is_logged_in')) {
            //this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
            this.router.navigate(['/home']);
        }
        return true;
    }

    canDeactivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('is_logged_in')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}