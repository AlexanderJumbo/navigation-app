import React, { useEffect } from "react";

import "./global.css";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";

//* Evita que el SplashScreen se quite si las fuentes aún no fueron cargadas
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    //*Quitamos el SplashScreen una vez las fuentes hayan sido cargadas
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
  //return <Stack />;
};

export default RootLayout;
