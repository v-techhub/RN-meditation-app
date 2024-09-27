import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const IconBtn = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.wrapper}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "rgb(230,230,230)",
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 13,
    alignItems: "center",
  },
});
