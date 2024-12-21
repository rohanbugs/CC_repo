import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './services/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideHttpClient(withInterceptors([tokenInterceptor])), provideRouter(routes), provideClientHydration(), provideAnimationsAsync('noop'),provideHttpClient(withFetch())]
};

//provideHttpClient(withInterceptors([tokenInterceptor])) is for function based interceptors
