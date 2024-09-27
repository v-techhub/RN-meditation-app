import React from "react";
import LoginScreen from "./screens/Auth";
import { useFonts } from "expo-font";

export default function HomeScreen() {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  });
  if (!loaded) return;
  return <LoginScreen />;
}
