import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import 'expo-font';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import Navigation from "./src/infrastructure/navigation";

import ThemeProvider from "./src/providers/theme/theme.provider";
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

const App = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
