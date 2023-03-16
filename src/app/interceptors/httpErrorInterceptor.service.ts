import {
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class HttpErrorInterceptorService extends HttpErrorResponse {
  constructor(private toastrService: ToastrService) {
    super(toastrService);
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        let errorMesagge = '';
        let errorType = '';

        if (httpErrorResponse.error instanceof ErrorEvent) {
          errorType = 'Museums Client side error';
          errorMesagge = httpErrorResponse.error.error;
        } else {
          errorType = 'Server side error';
          switch (httpErrorResponse.status) {
            case 500:
              errorMesagge = 'There is not connection to the server.';
              break;
            case 404:
              errorMesagge = 'Element not found.';
              break;
            case 503:
              errorMesagge =
                'Connection error. Please contact the administrator.';
              break;
            case 400:
              errorMesagge = 'The request is incorrect.';
              break;
            case 503:
              errorMesagge =
                'Connection error. Please contact the administrator.';
              break;
            default:
              errorMesagge = `${httpErrorResponse.status}: ${httpErrorResponse.error.error}`;
              break;
          }
          this.toastrService.error(errorMesagge, errorType, {
            closeButton: true,
          });
        }
        return throwError(() => new Error(errorMesagge));
      })
    );
  }
}
