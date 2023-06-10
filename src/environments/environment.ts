// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'argp-frontend',
    appId: '1:954608127311:web:49659df5de03fb26d3493a',
    storageBucket: 'argp-frontend.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCyx6JmJTU7RH7Pp-NCfprf48VyGmrvFwI',
    authDomain: 'argp-frontend.firebaseapp.com',
    messagingSenderId: '954608127311',
    measurementId: 'G-HV37FSBF26',
  },

    production: false,
    //URL: 'http://localhost:8080/'
    URL: 'https://backend-deploy-j40e.onrender.com/'
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.