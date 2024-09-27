import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import fonts from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";

interface InputFieldProps {
  placeholder: string;
  keyBoardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const InputField = ({
  placeholder,
  keyBoardType,
  secureTextEntry = false,
}: InputFieldProps) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a69fa8"
        style={styles.input}
        keyboardType={keyBoardType}
        secureTextEntry={secureTextEntry}
      />
      {secureTextEntry && <Feather name="eye-off" size={18} />}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgb(242, 242, 242)",
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 5,
    flexDirection: "row",
  },
  input: {
    fontFamily: fonts.default,
    flex: 1,
  },
});
