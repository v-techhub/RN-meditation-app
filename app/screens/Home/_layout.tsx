import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import fonts from "@/constants/fonts";
import sizes from "@/constants/sizes";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerLeft: () => <Text style={styles.headerText}>Meditate</Text>,
          headerTitleStyle: { opacity: 0 },
          tabBarLabel: "Meditate",
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          headerLeft: () => <Text style={styles.headerText}>Sleep</Text>,
          headerTitleStyle: { opacity: 0 },
          tabBarLabel: "Sleep",
        }}
      />
      <Tabs.Screen
        name="forYou"
        options={{
          headerLeft: () => <Text style={styles.headerText}>For You</Text>,
          headerTitleStyle: { opacity: 0 },
          tabBarLabel: "For You",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: fonts.bold,
    fontSize: sizes.xl,
  },
});
