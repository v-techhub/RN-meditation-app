import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import fonts from "@/constants/fonts";
import sizes from "@/constants/sizes";
import InputField from "./components/InputField";
import IconBtn from "./components/IconBtn";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const SignUp = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Text style={[styles.textBold, { fontSize: sizes.lg }]}>
          Create an account
        </Text>
        <View style={styles.link}>
          <Text style={styles.textDefault}>Already have an account?</Text>
          <Link
            style={[styles.textDefault, { color: "#6c56f2" }]}
            href="/screens/Auth"
          >
            Login
          </Link>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <InputField placeholder="Email Address" keyBoardType="email-address" />
        <InputField placeholder="Password" secureTextEntry />
        <Link
          href="/"
          style={[
            styles.textDefault,
            { alignSelf: "flex-end", color: "#a69fa8" },
          ]}
        >
          Forgot password?
        </Link>
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={styles.textDefault}>or sign up with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconContainer}>
        <IconBtn
          icon={<AntDesign name="googleplus" color="black" size={30} />}
        />
        <IconBtn icon={<AntDesign name="apple1" color="black" size={30} />} />
        <IconBtn
          icon={<FontAwesome5 name="facebook" color="#0062e0" size={30} />}
        />
      </View>

      <View style={{ paddingHorizontal: 20, position: "absolute", bottom: 40 }}>
        <Text style={[styles.textDefault, { textAlign: "center" }]}>
          By clicking{" "}
          <Text
            style={{
              fontFamily: fonts.medium,
              color: "#6c56f2",
            }}
          >
            Continue
          </Text>
          , you agree to our{" "}
          <Text style={{ color: "#6c56f2" }}>Term's of use</Text> and{" "}
          <Text style={{ color: "#6c56f2" }}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: "auto",
    marginTop: 50,
    gap: 12,
    alignItems: "center",
  },
  textBold: {
    fontFamily: fonts.bold,
  },
  textDefault: {
    fontFamily: fonts.default,
  },
  link: {
    flexDirection: "row",
    gap: 5,
  },
  inputContainer: {
    gap: 20,
    width: "85%",
    marginHorizontal: "auto",
    marginTop: 50,
  },
  btn: {
    backgroundColor: "#6c56f2",
    borderRadius: 10,
    paddingVertical: 15,
  },
  btnText: {
    textAlign: "center",
    fontFamily: fonts.medium,
    color: "white",
  },
  or: {
    width: "85%",
    marginTop: 50,
    marginHorizontal: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  line: {
    backgroundColor: "#a69fa8",
    height: 1,
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 50,
    gap: 20,
    paddingHorizontal: 30,
  },
});
