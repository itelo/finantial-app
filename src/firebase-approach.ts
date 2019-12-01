import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxDHyDk2UWsLtRfU0IiBLKjQUKWxKnxyo",
  authDomain: "finantial-app.firebaseapp.com",
  databaseURL: "https://finantial-app.firebaseio.com",
  projectId: "finantial-app",
  storageBucket: "finantial-app.appspot.com",
  messagingSenderId: "879794109095",
  appId: "1:879794109095:web:807cfc8f39d4adceedf982"
};

app.initializeApp(firebaseConfig);

export default app;