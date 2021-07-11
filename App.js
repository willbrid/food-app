import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import 'expo-font';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

import Navigation from "./src/infrastructure/navigation";

import ThemeProvider from "./src/providers/theme/theme.provider";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCc12JZO0lcbTnsqnTYvLpuhMDNu_fpZ0E",
  authDomain: "firestore-test-553de.firebaseapp.com",
  databaseURL: "https://firestore-test-553de.firebaseio.com",
  projectId: "firestore-test-553de",
  storageBucket: "firestore-test-553de.appspot.com",
  messagingSenderId: "893177151432",
  appId: "1:893177151432:web:0cdfe842d8889764"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [oswaldLoaded, error1] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded, error2] = useLato({
    Lato_400Regular,
  });
  
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
