import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Image
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
// import * as DocumentPicker from 'expo-document-picker';
// import { DocumentPicker, ImagePicker } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';



export default function UploadFile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [judge_or_clerk_name, setJudge_or_clerk_name] = useState("");
  const [role, setRole] = useState("");
  const [submit, setSubmit] = useState(false);
  
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
}

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ padding: 20, marginTop:30, textAlign:'center' }}>UploadFile</Text>
        <View>
          <TextInput
            style={styles.inputField}
            placeholder="write case name"
            onChangeText={(value) => setName(value)}
            value={name}
          />
       
        </View>

        <View>
          <TextInput
            style={styles.inputField}
            placeholder="The case is between who and who?"
            onChangeText={(value) => setPhone(value)}
            value={phone}
          />
        
        </View>
        <View >
      {/* <Button title="pick file image"  /> */}
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth:1 , height:100, margin:15, padding:10 }} onPress={pickImage}>
      <Entypo name="upload" size={24} color="black" />
 <Text>pick a file image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
        <View style={styles.select}>
          <RNPickerSelect
            placeholder={{
              label: "please select the judge",
              value: null,
            }}
            onValueChange={(value) => setRole(value)}
            items={[
              { label: "Mariama Sawaneh", value: "Mariama Sawaneh" },
              { label: "Jamal", value: "Jamal" },
              { label: "Cherno", value: "Cherno" },
              { label: "Kemo Njie", value: "Kemo Njie.." },
            ]}
            value={role}
          />
        
        </View>

        <View>
          <TextInput
            style={styles.inputField}
            placeholder="enter email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        
        </View>

        <View>
          {/* <RNPickerSelect
            placeholder={{
              label: "please select your correspondant",
              value: null,
            }}
            onValueChange={(value) => setRole(value)}
            value={role}
            items={[
              { label: "clerk", value: "clerk" },
              { label: "judge", value: "judge" },
            ]}
          /> */}
          
        </View>

       

        <View>
          <TouchableOpacity
            style={styles.UploadFile}
            onPress={() =>
            navigation.navigate('SheduleDate')
            }
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              UploadFile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  inputField: {
    padding: 10,
    // borderWidth: 1,
    borderRadius: 20,
    borderBottomWidth: 1,
    margin: 5,
  },
  select: {
    padding: 10,
    // borderWidth: 1,
    borderRadius: 20,
    borderBottomWidth: 1,
    // margin: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  UploadFile: {
    width: "100%",
    color: "#fff",
    padding: 15,
    backgroundColor: "#111827",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  error: {
    color: "red",
    padding: 10,
  },
});
