// import { HttpInterceptorFn } from '@angular/common/http';

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log("interceptor invoked..")
//  // Retrieve the token from localStorage
//  const token = localStorage.getItem('token');

//  // Clone the request and add the Authorization header only if the token exists
//  const clonedReq = token
//    ? req.clone({
//        setHeaders: { Authorization: `Bearer ${token}` },
//      })
//    : req;

//  // Pass the cloned or original request to the next handler
//  return next(clonedReq);
// };

import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor invoked...');
  const platformId = inject(PLATFORM_ID);
  let token = '';

  if (isPlatformBrowser(platformId)) {
    token = localStorage.getItem('token') || '';
  }

  const clonedReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    : req;

  return next(clonedReq);
};

