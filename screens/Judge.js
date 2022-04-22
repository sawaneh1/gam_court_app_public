import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import img from "../assets/image/back2.png";
import { StatusBar } from "expo-status-bar";
import {
  Fontisto,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";
import Footer from "../components/Footer";

const DATA = [
  {
    id: 1,
    month: "Dec",
    day: 4,
  },
  {
    id: 2,
    month: "Dec",
    day: 5,
  },
  {
    id: 3,
    month: "Dec",
    day: 10,
  },
  {
    id: 4,
    month: "Dec",
    day: 13,
  },
  {
    id: 5,
    month: "Dec",
    day: 25,
  },
];

const Judge = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <View style={styles.header}>
          <View style={{ padding: 10, marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 17 }}>Welcome back!!!</Text>
            <Text style={{ color: "#fff", fontSize: 17 }}> Sulayman </Text>
          </View>
          <View style={styles.avatar}>
            <Image source={img} style={styles.image} />
          </View>
        </View>
      </View>

      <View style={styles.menu}>
        <View style={styles.menu_item}>
          <TouchableOpacity style={[styles.btn_one, styles.btn]}>
            <Fontisto name="date" size={20} color="#fff" />

            <Text style={styles.text}>Shedule case </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu_item}>
          <TouchableOpacity style={[styles.btn_two, styles.btn]}>
            <Ionicons name="cloud-upload-outline" size={20} color="black" />
            <Text style={[styles.text, { color: "#000" }]}>Upload files </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.menu_item}>
          <TouchableOpacity style={[styles.btn_three, styles.btn]}>
            <Ionicons name="create-outline" size={20} color="#fff" />
            <Text style={styles.text}>Setting </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu_item}>
          <TouchableOpacity style={[styles.btn_four, styles.btn]}>
            <Ionicons name="eye-outline" size={20} color="#fff" />
            <Text style={styles.text}> Send Message </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View>
            <Text style={styles.case_color}>Court Cases</Text>
          </View>
          <View>
            <Text style={styles.case_color}>See all</Text>
          </View>
        </View>
        <FlatList
          horizontal={true}
          data={DATA}
          keyExtractor={(item) => item.id}  
          renderItem={({ item }) => {
            return (
              <View style={styles.cases}>
                <TouchableOpacity style={styles.case}>
                  <View>
                    <Text style={styles.case_content}>{item.month}</Text>
                  </View>
                  <View>
                    <Text style={styles.case_content}>{item.day}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.activity}>
        <View>
          {/* <Ionicons name="timer-outline" size={30} color="black" /> */}
          <EvilIcons
            name="user"
            style={{ color: "#000", marginTop: 10 }}
            size={45}
            color="black"
          />
        </View>
        <View>
          <Text
            style={{
              color: "#000",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Heading title
          </Text>
          <Text style={{ color: "#000", marginLeft: 5 }}>
            this is that woooooo..............
          </Text>
        </View>
        <View>
          <MaterialIcons
            name="keyboard-arrow-right"
            style={{ margin: 10, marginLeft: 50 }}
            size={27}
            color="#000"
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Dasb ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  header: {
    margin: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: 10,
  },
  greet: {
    marginTop: 10,
  },
  text_head: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 18,
  },

  menu: {
    flexDirection: "row",
    padding: 5,
  },
  menu_item: {},

  btn: {
    width: 170,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    margin: 2,
  },
  btn_one: {
    backgroundColor: "#7F00FF",
  },
  btn_two: {
    width: "100%",
    backgroundColor: "#fff",
    color: "red",
  },
  btn_three: {
    width: "100%",
    backgroundColor: "purple",
    color: "red",
  },
  btn_four: {
    width: "100%",
    backgroundColor: "violet",
    color: "red",
  },
  text: {
    color: "#fff",
    marginLeft: 5,
  },

  cases: {
    margin: 10,
  },
  case: {
    width: 100,
    backgroundColor: "#fff",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  case_content: {
    fontSize: 23,
    fontWeight: "bold",
  },
  case_color: {
    color: "#fff",
    fontWeight: "bold",
  },
  activity: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "#fff",
    padding: 8,

    margin: 15,
    borderRadius: 10,
  },
});
