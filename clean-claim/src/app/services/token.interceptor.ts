import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("interceptor invoked..")
 // Retrieve the token from localStorage
 const token = localStorage.getItem('token');

 // Clone the request and add the Authorization header only if the token exists
 const clonedReq = token
   ? req.clone({
       setHeaders: { Authorization: `Bearer ${token}` },
     })
   : req;

 // Pass the cloned or original request to the next handler
 return next(clonedReq);
};
