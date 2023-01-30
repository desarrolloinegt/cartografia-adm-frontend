import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, catchError, retry } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private router:Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === HttpStatusCode.Conflict) {
                    this.Toast.fire({ icon: 'error', title: error.error.message })
                    return throwError(() => new Error(error.error.message));
                }
                if (error.status === HttpStatusCode.NotFound) {
                    this.Toast.fire({ icon: 'error', title: error.error.message })
                    return throwError(() => new Error(error.error.message));
                }
                if (error.status === HttpStatusCode.Unauthorized) {
                    this.router.navigateByUrl('auth/login')
                    return throwError(() => new Error(error.error.message));
                }
                this.Toast.fire({ icon: 'error', title: error.error.message })
                return throwError(() => new Error('Ups algo salio mal'));

            })
        );
    }
    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


}

