import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tabsBarIcons from "@/utils/tabsBarIcons";
import fonts from "@/constants/fonts";
import sizes from "@/constants/sizes";

interface TabBarItemProps {
  routeName: string;
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  label: any;
}

const TabBarItem = ({
  routeName,
  onPress,
  onLongPress,
  isFocused,
  label,
}: TabBarItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.wrapper}
    >
      {tabsBarIcons[routeName as keyof typeof tabsBarIcons]({
        color: isFocused ? "#000" : "#c5c5c5",
      })}
      <Text style={[styles.text, { color: isFocused ? "#000" : "#c5c5c5" }]}>
        {label as string}
      </Text>
    </TouchableOpacity>
  );
};

export default TabBarItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontFamily: fonts.default,
    fontSize: sizes.sm,
  },
});
