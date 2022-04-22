import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [judge_or_clerk_name, setJudge_or_clerk_name] = useState("");
  const [role, setRole] = useState("");
  const [submit, setSubmit] = useState(false);
  const validate = () => {
    if (
      name &&
      phone &&
      judge_or_clerk_name &&
      email &&
      role &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleRegister = async (formData) => {
    setSubmit(true);
    if (validate() != true) {
      console.log("something when wromg");
    } else {
      const url ="https://a12b-212-60-71-170.ngrok.io/signup";
      axios.post(url, formData).then((res) => {
        console.log(res);
        navigation.navigate("Login");
      });
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ padding: 20 }}>Register</Text>
        <View>
          <TextInput
            style={styles.inputField}
            placeholder="enter your name"
            onChangeText={(value) => setName(value)}
            value={name}
          />
          {submit && !name && (
            <Text style={styles.error}> please name is required!!!</Text>
          )}
        </View>

        <View>
          <TextInput
            style={styles.inputField}
            placeholder="enter phone number"
            onChangeText={(value) => setPhone(value)}
            value={phone}
          />
          {submit && !phone && (
            <Text style={styles.error}>
              {" "}
              please phone number is required!!!
            </Text>
          )}
        </View>

        <View style={styles.select}>
          <RNPickerSelect
            placeholder={{
              label: "please select your role",
              value: null,
            }}
            onValueChange={(value) => setRole(value)}
            items={[
              { label: "clerk", value: "clerk" },
              { label: "judge", value: "judge" },
            ]}
            value={role}
          />
          {submit && !role && (
            <Text style={styles.error}> please select your role!!!</Text>
          )}
        </View>

        <View>
          <TextInput
            style={styles.inputField}
            placeholder="enter email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          {submit && !password && (
            <Text style={styles.error}> please enter your email!!!</Text>
          )}
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
          <View>
            <TextInput
              style={styles.inputField}
              placeholder="please write your correspondant name"
              value={judge_or_clerk_name}
              onChangeText={(value) => setJudge_or_clerk_name(value)}
            />
          </View>
          {submit && !judge_or_clerk_name && (
            <Text style={styles.error}>
              {" "}
              please select your write your correspondant name!!!
            </Text>
          )}
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            placeholder="enter password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          {submit && !password && (
            <Text style={styles.error}> please enter your password!!!</Text>
          )}
        </View>

        <View>
          <TextInput
            style={styles.inputField}
            placeholder="confirm your password"
            onChangeText={(value) => setConfirmPassword(value)}
            value={confirmPassword}
          />
          {submit && password && !confirmPassword ? (
            <Text style={styles.error}> please confirm your password!!!</Text>
          ) : null}
          <View>
            {submit && confirmPassword && password !== confirmPassword ? (
              <Text style={styles.error}>your passwords do not match</Text>
            ) : null}
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.register}
            onPress={() =>
              handleRegister({
                name: name,
                phone: phone,
                judge_or_clerk_name: judge_or_clerk_name,
                email: email,
                role: role,
                password: password,
              })
            }
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Register
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
  register: {
    width: "100%",
    color: "#fff",
    padding: 10,
    backgroundColor: "#111827",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  error: {
    color: "red",
    padding: 10,
  },
});
