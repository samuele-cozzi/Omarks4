export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyDW3rcPfnRa--AyonjzUkrdO615y2zNZVk',
    authDomain: 'omarks4.firebaseapp.com',
    databaseURL: 'https://omarks4.firebaseio.com',
    projectId: 'omarks4',
    storageBucket: 'omarks4.appspot.com',
    messagingSenderId: '1040962154792'
  },
  firebaseAuthConfig: {
    enableFirestoreSync: true, // enable/disable autosync users with firestore
    toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
    toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
    authGuardFallbackURL: '/login', // url for unauthenticated users - to use in combination with canActivate feature on a route
    authGuardLoggedInURL: '/home', // url for authenticated users - to use in combination with canActivate feature on a route
    passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
    passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2,
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    guardProtectedRoutesUntilEmailIsVerified: true
  }
};
