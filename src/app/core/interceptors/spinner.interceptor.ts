import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '@core/services/spinner.service';
import { finalize, Observable } from 'rxjs';
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinnerServ: SpinnerService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerServ.show();
        return next.handle(req).pipe(
            finalize(()=> this.spinnerServ.hide()));
    }
}
