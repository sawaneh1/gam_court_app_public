import React, { useContext, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import img from "../../assets/image/img1.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const height = Dimensions.get("window").height;
import UserContext from "../../UserContext/useUser";


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const [userValues, setUserValues] = useContext(UserContext)

  const handleLogin = async (formData) => {
    
    const url = "https://7caa-212-60-71-170.ngrok.io/login";

    axios
      .post(url, formData)
      .then((response) => {
        console.log("this is form data", formData);
        const { accessToken,name, phone, role,email, id,judge_or_clerk_name } = response.data;
        console.log('this is',accessToken);
        userValues.userName = name
         userValues.UserId =id
         userValues.phone = phone
         userValues.accessToken = accessToken
         

        if (!accessToken) {
          console.log("sorry you detail not correct");
          navigation.navigate("Login");
          return;
        } else {
          try {
            const data = JSON.stringify(userValues)
            AsyncStorage.setItem('userDetails', data )
          } catch (e) {
            // saving error
            console.log('this an error', e);
          }
          console.log(response.data);
          
          navigation.navigate("Dashboard");
        }
      })
      .catch((error) => {
        console.log("this is", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ImageBackground
        source={img}
        style={styles.image}
        resizeMode="cover"
      ></ImageBackground>
      <View style={styles.main}>
        <Text
          style={{
            marginBottom: 10,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
        <View style={styles.input}>
          <TextInput
            placeholder="enter email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder="enter password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.login}
            onPress={() =>
              handleLogin({
                email: email,
                password: password,
              })
            }
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ marginTop: 20, padding: 20 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text>Dont have an account? register here...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  login: {
    width: "100%",
    color: "#fff",
    padding: 15,
    backgroundColor: "#111827",
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  main: {
    margin: 20,
    // padding: 20,
    padding: 10,
  },
  // text: {
  //   // flex: 1,
  //   // backgroundColor: "rgba(0,0,0,0.5)",
  //   backgroundColor: "#fff",
  //   opacity: 0.4,
  //   height: height,
  // },
});
