import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Footer from "../components/Footer";
import img from "../assets/image/ga2.png";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";

const SheduleDate = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  // const [timeText, setTimeText] = useState()
  const [dateOutPut, setDateOutPut] = useState()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate)

    let dateText = ` ${tempDate.getDate()} / ${tempDate.getMonth()}/ ${tempDate.getFullYear()}`
    let timeText = `${tempDate.getHours()} :  ${tempDate.getMinutes()} `

    setDateOutPut(`${dateText} at ${timeText}` )
    console.log(dateText);
    console.log(timeText);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  // const updateDate = () =>{
  //   setTimeText()
  // }
  
  // const onChangeTime = (event, selectedDate) => {
  //   // console.log(event.nativeEvent.nativeEvent);

  //   const currentDate = `${selectedDate.getHours()}:${selectedDate.getMinutes()} `;
  //   // and at ${selectedDate.getHours()}:${selectedDate.getMinutes()}
  //   console.log("this is time", currentDate);

  //   setShow(Platform.OS === "ios");
  //   if (typeof currentDate == "string") {
  //     setTime(currentDate);
  //   }
  //   //
  // };

  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Image source={img} style={styles.image} />

      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          height: 100,
          borderRadius: 15,
          margin: 10,
          shadowColor: "#000",
          shadowOffset: 10,
          borderLeftWidth: 3,
          borderRightWidth: 3,

          // opacity: 0.9,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#000" }}>
              Please shedule a date for court x
            </Text>
          </View>
          <View>
            <EvilIcons
            
              name="user"
              style={{ color: "#000" }}
              size={35}
              color="black"
            />
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <TouchableOpacity
              onPress={showDatepicker}
              style={[styles.mainBtn, styles.pickDate]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#111827",
                  textAlign: "center",
                }}
              >
                Pick a date
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={showTimepicker}
              style={[styles.mainBtn, styles.pictime]}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ccc" }}>
                pick a time
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
         <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      </View>
      <View>
        <View>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
        </View>
        {
          dateOutPut &&(
            <Text style={{color:'blue', textAlign:'center'}}> The case is On : {dateOutPut}</Text>

          )
        }
        <View>
          {/* {show && (
            <DateTimePicker
              testID="clock"
              value={time}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )} */}
        </View>

        <View>
          {/* {test != null || test != "" ? <Text>{test}</Text> : null} */}
          {/* {date && date != test && time && time != test ? (
            <Text> the date:{date} and time is at jfd</Text>
          ) : null} */}
        </View>
      </View>
      <View style={styles.submit}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.text}>Submit case</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default SheduleDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 5,
  },
  image: {
    marginTop: 15,
    resizeMode: "contain",
    // justifyContent: "center",
    height: "40%",
    width: "100%",
  },
  mainBtn: {
    marginTop: 10,
    margin: 2,
    backgroundColor: "#7F00FF",
    borderRadius: 10,
    padding: 10,
    width: 155,
  },
  pickDate: {
    backgroundColor: "#ccc",
  },
  submit: {
    width: "100%",

    // justifyContent: "center",
  },

  submitBtn: {
    borderRadius: 10,
    backgroundColor: "#111827",
    padding: 15,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
