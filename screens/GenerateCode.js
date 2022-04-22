import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import img from "../assets/image/ga7.png";
import Footer from "../components/Footer";

const GenerateCode = () => {
  console.log();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ImageBackground source={img} style={styles.image} />

      <View style={styles.mainText}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet.
        </Text>
        <Text
          style={{
            fontSize: 15,

            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </Text>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Generate code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default GenerateCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
  },
  mainText: {
    position: "absolute",
    top: "46%",
    margin: 10,
    padding: 10,
  },
  btn: {
    width: "100%",
    color: "#fff",
    padding: 15,
    backgroundColor: "#111827",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 25,
    marginLeft: 10,
  },
});
