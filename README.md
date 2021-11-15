# ionic-mosum
Ionic Weather App - The goal of this weather app is to demo different ionic compon

## Prerequisites
- Download nodejs from https://nodejs.org/en/download/current/ and it will install `node` and `npm`
```bash
node -v
 - should be >= 6.0.0
npm -v
 - should be >= 3.0.0
```
- For iOS, update XCode version to 8.0 or higher

## Getting Started

* Clone this repository

* Install Ionic, cordova and node_modules

    ```bash
    $ npm uninstall -g ionic cordova
    $ npm install -g ionic cordova
    $ npm install
    $ npm install --only=dev  
    ```
* 
  * Replace API_KEY in `src/providers/constants.ts`
  ```js

  ```
* Get google API key from [Google Developers Console](https://console.developers.google.com/apis/credentials)
  * Replace key in `src/index.html`
  ```html
  <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyAZL0jdvdtBV_DmzLZ8yW53GHnhlRrbIAY&libraries=places">
  </script>
  ```

## Run

#### Browser
```bash
    
    # Android
    ionic serve --platform android
    # All Platforms(iOS, Android and Windows)
    ionic serve --lab
```

### Android

```bash
    $ ionic cordova platform add android
    $ ionic cordova build android --prod
    $ ionic cordova run android --prod
```

    
### Screenshots

  
* Tablet
  
  <img src="screenshots/android-tablet.png" alt="android-tablet" width="350"/>
  <img src="screenshots/ios-tablet.png" alt="ios-tablet" width="350"/>

## Existing Features

* Tabs, Side Menu with image
* Various Animations
* Infinite scroll

## Contribution
Contributions are welcome!

* Report issues
* Open pull request with improvements
* Spread the word
