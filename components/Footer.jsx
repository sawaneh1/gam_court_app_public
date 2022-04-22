import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Fontisto,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  EvilIcons,
  Entypo,
  Feather
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";



const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute()
  
  console.log('ths',route.name);

  return (
    <View style={[styles.footer, {backgroundColor:`${route.name ==  'Dashboard'  ? '#fff': '#111827' }`}]}>
      <View
        // style={{
        
        // }}
      >
         <TouchableOpacity
          
          onPress={() => navigation.navigate("Dashboard")}
        >
        <Ionicons name="home" size={30} color={`${route.name ==  'Dashboard'  ? '#111827': '#fff' }`} />
        {/* <Text style={{ color: "#fff", marginLeft: 10 }}>Home</Text> */}
        </TouchableOpacity>
      </View>
      {/* <View>
        <Ionicons
          name="ios-cog-outline"
          size={30}
          style={{ color: "#ccc",   }}
          color="black"
        />
      </View> */}
    
      <View>
      <TouchableOpacity
          
          onPress={() => navigation.navigate("SheduleDate")}
        >
        {/* <Ionicons
            name="timer-outline"
            size={30}
            style={{ color: "#000", marginTop: 10 }}
            color="black"
          /> */}
        {/* <Ionicons
          name="notifications-outline"
          style={{ color: "grey", top: 5 }}
          size={25}
          color="black"
        /> */}
        <Entypo name="back-in-time"  color={`${route.name ==  'Dashboard'  ? '#111827': '#fff' }`}
          size={30}
          />
          </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate("GenerateCode")}
        >
        {/* <Ionicons
            name="timer-outline"
            size={25}
            style={{ color: "#000", marginTop: 10 }}
            color="black"
          /> */}
          <Entypo name="creative-cloud"   
          size={30} size={30}  color={`${route.name ==  'Dashboard'  ? '#111827': '#fff' }`} />
          </TouchableOpacity>
        
      </View>

      <View>
        {/* <Ionicons
            name="timer-outline"
            size={25}
            style={{ color: "#000", marginTop: 10 }}
            color="black"
          /> */}
        <Ionicons
          name="notifications-outline"
         
          size={30}
          color={`${route.name ==  'Dashboard'  ? '#111827': '#fff' }`}
        />
      </View>
      <View>
        <Ionicons
          name="ios-cog-outline"
          size={30}
          color={`${route.name ==  'Dashboard'  ? '#111827': '#fff' }`}
          
        />
      </View>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
      <Feather name="log-out" size={24}    size={30}
          color={`${route.name ==  'Dashboard'  ? '#111827': '#fff' }`} />
       </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    // backgroundColor: "#fff",
    width: "100%",
    
    // height: 50,
    // marginLeft: 20,
    // marginRight: 10,
    // left: "5%",
    padding:10,
    margin: "auto",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    justifyContent: "space-between",
  },
});
