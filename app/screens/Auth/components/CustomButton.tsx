import { Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import fonts from "@/constants/fonts";
import sizes from "@/constants/sizes";

interface CustomButtonProps {
  icon: ReactNode;
  text: string;
  bg: string;
  textColor: string;
  onPress: () => void;
}

const CustomButton = ({
  icon,
  text,
  bg,
  textColor,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        backgroundColor: bg,
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
      }}
    >
      {icon}
      <Text
        style={{
          color: textColor,
          textAlign: "center",
          fontSize: sizes.base,
          fontFamily: fonts.light,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
