import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "./components/CustomButton";
import { Link, router } from "expo-router";
import fonts from "@/constants/fonts";
import sizes from "@/constants/sizes";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/banner.png")}
        resizeMode="cover"
        style={styles.banner}
      />
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.textBold]}>
            Relax and achieve greater peace of mind
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            bg="black"
            icon={<AntDesign name="apple1" color="white" size={20} />}
            text="Continue with apple"
            textColor="white"
            onPress={() => router.push("/screens/Home")}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 15, paddingHorizontal: 15 }}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => router.push("/screens/Home")}
          >
            <AntDesign name="googleplus" color="black" size={20} />
            <Text
              style={[
                styles.textThin,
                {
                  color: "black",
                  textAlign: "center",
                  fontSize: sizes.base,
                },
              ]}
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => router.push("/screens/Home")}
          >
            <AntDesign name="mail" color="black" size={20} />
            <Text
              style={[
                styles.textThin,
                {
                  color: "black",
                  textAlign: "center",
                  fontSize: sizes.base,
                },
              ]}
            >
              Email
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <Text style={styles.textThin}>Don't have an account? </Text>
          <Link style={styles.textBold} href="/screens/Auth/sign-up">
            Sign up
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfafd",
  },
  title: {
    fontSize: sizes["2xl"],
    textAlign: "center",
  },
  textThin: {
    fontFamily: fonts.light,
  },
  textBold: {
    fontFamily: fonts.bold,
  },
  banner: {
    width: "100%",
    height: "66%",
  },
  textContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
  },
  btnContainer: {
    marginHorizontal: "auto",
    paddingVertical: 15,
    gap: 13,
    width: "92%",
  },
  btn: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    fontFamily: fonts.default,
  },
});
