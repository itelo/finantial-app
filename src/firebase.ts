import app from 'firebase/app';
import {} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxDHyDk2UWsLtRfU0IiBLKjQUKWxKnxyo",
  authDomain: "finantial-app.firebaseapp.com",
  databaseURL: "https://finantial-app.firebaseio.com",
  projectId: "finantial-app",
  storageBucket: "finantial-app.appspot.com",
  messagingSenderId: "879794109095",
  appId: "1:879794109095:web:807cfc8f39d4adceedf982"
};

export const useFirebase = () => {
  app.initializeApp(firebaseConfig);

  const auth = app.auth();

  const login = (email: string, password: string) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const registerUser = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password);

  // listen for state changes on authUSer
  auth.onAuthStateChanged((authUser) => {
    if(authUser) {
      localStorage.setItem('authUser', JSON.stringify(authUser));
      return;
    }

    localStorage.removeItem('authUser');
  });

  return {
    login,
    logout,
    registerUser,
  }
};
