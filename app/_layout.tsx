import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/Auth/sign-up"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="screens/Auth/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="screens/Home" options={{ headerShown: false }} />
    </Stack>
  );
}
