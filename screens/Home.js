import React,{useContext} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import img from "../assets/image/back2.png";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import useUser from "../UserContext/useUser";
import UserContext from "../UserContext/useUser"


const height = Dimensions.get("window").height;
const Home = () => {
  // const [userValues, setUserValues] = useUser();
  // console.log(userValues);
  // console.log("use User in home", useUser());

  const navigation = useNavigation();
  const [userValues, setUserValues] = useContext(UserContext)
  console.log(userValues);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <ImageBackground source={img} style={styles.image} resizeMode="cover">
        {/* <View style={styles.text} /> */}
      </ImageBackground>
      <View style={styles.info}>
        <Text style={{ color: "black" }}>
          The International Court of Justice (is the principal judicial organ of
          the Gambia It was established in June 1945 by the Charter of the
          Gamiba and began work in April 1946.
        </Text>
      </View>
      <View style={styles.auth}>
        <View>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "70%",
  },
  // text: {
  //   // flex: 1,
  //   // backgroundColor: "rgba(0,0,0,0.5)",
  //   backgroundColor: "#111827",
  //   opacity: 0.2,
  //   height: height,
  // },
  auth: {
    color: "red",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    padding: 20,
    marginLeft: 20,
  },
  login: {
    width: 170,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#111827",
    height: 50,
    position: "absolute",
    // top: 1,
    left: 50,
  },
  register: {
    // backgroundColor: "#3D174F",
    width: 170,
    height: 50,
    padding: 15,
    borderRadius: 9,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    backgroundColor: "#fff",
    right: 80,
  },
  info: {
    color: "blue",
    position: "absolute",
    bottom: 150,
    padding: 0,
    margin: 10,
  },
});
