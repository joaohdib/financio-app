import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import PurpleRain            from './theme/purple-rain.preset';
import Aura from '@primeng/themes/aura';


import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), providePrimeNG({
    theme: {
      preset: PurpleRain
    }
  })
  ]
};
