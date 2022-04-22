import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "./screens/Dashboard";
import GenerateCode from "./screens/GenerateCode";
import SheduleDate from "./screens/SheduleDate";
// import useUser, { UserContext, UserProvider } from "./UserContext/useUser";
import Layout from "./components/Layout";
import UserContext from "./UserContext/useUser";
import Case from "./screens/Case";
import Cases from "./screens/Cases";
import UploadFile from "./screens/UploadFile";
// import Layout from "./components/Layout";

const Stack = createNativeStackNavigator();
export default function App() {
  // const [userValues, setUserValues] = useUser();
  // const test = useContext(UserContext);
  // console.log(test);
  const [userValues, setUserValues] = useState({
    accesToken: "",
    userName: "",
    userPhone: "",
    userRole: "",
    userId: "",
  });

  return (
    <UserContext.Provider value={[userValues, setUserValues]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="GenerateCode" component={GenerateCode} />

          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="SheduleDate" component={SheduleDate} />
          <Stack.Screen name="Case" component={Case} />
          <Stack.Screen name="Cases" component={Cases} />
          <Stack.Screen name="UploadFile" component={UploadFile} />

        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
