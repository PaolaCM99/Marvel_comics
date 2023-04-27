// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  public_key:'2e2ef877c5393578e3fd0da4805fd25f',
  private_key:'48aa16c51d4af796dc8b68e0a1b6472b7542a7a6',
  gate:'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e2ef877c5393578e3fd0da4805fd25f&hash=5a274982d9c94d8431464a6c055c0dc3'
  //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=2e2ef877c5393578e3fd0da4805fd25f&hash=5a274982d9c94d8431464a6c055c0dc3
  //public key of "1234" and a private key of "abcd"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
