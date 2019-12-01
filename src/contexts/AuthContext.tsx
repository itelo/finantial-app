import React from 'react';
import firebase from "../firebase-approach";

type Auth = {
  user: firebase.User | null;
  isAuthenticated: boolean;
}

type AuthContext = {
  auth: Auth,
  authActions: {
    registerUser: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    login: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    logout: () => Promise<void>
  }
}

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = React.createContext({} as AuthContext);

export const AuthProvider = (props: AuthProviderProps) => {
  const firebaseAuth = React.useMemo(() => firebase.auth(), []);
  const [auth, setAuth] = React.useState<Auth>({
    user: null,
    isAuthenticated: false
  });

  const login = (email: string, password: string) => firebaseAuth.signInWithEmailAndPassword(email, password)

  const logout = () => firebaseAuth.signOut();

  const registerUser = (email: string, password: string) => firebaseAuth.createUserWithEmailAndPassword(email, password);
  
  // listen for state changes on authUSer
  React.useEffect(() => {
    firebaseAuth.onAuthStateChanged(
      (firebaseData) => {
        console.log({firebaseData})
        if(firebaseData) {
          setAuth({
            user: firebaseData,
            isAuthenticated: true
          });
        } else {
          setAuth({
            user: firebaseData,
            isAuthenticated: false
          });
        }
      });

    // return unsubscribe();
  }, [])
  
  const value = {
    auth,
    authActions: {
      login,
      logout,
      registerUser
    }
  };
  
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}
