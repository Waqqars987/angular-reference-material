import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // if(req.url){
        //     // if u dont want to intercept for a particular request
        // }
        const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') })
        return next.handle(modifiedRequest);
    }
}