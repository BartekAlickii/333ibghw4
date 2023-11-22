import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet } from "react-native"; 
import { Component } from "react/cjs/react.production.min";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import config from "./config";
import LoginFunc from './login';

export default function SignUpFunc({ navigation }) {
    const [username, setUsername] = useState("");
    const [usernameTEXT, setUsernameTEXT] = useState("");
    const [password, setPass] = useState("");
    const [passCheck, setPassCheck] = useState("");
    // const Stack = createStackNavigator();


      return (
      <SafeAreaView style={{flex: 1, padding:24, width: 350}}>
      {
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <TextInput style = { styles.input}
          placeholder="Enter username"
          onChangeText={(text)=> setUsername(text)}> 
          </TextInput>

          <TextInput style = { styles.input}
          placeholder="Enter username TEXT"
          onChangeText={(text)=> setUsernameTEXT(text)}> 
          </TextInput>
          <TextInput style = { styles.input}
          placeholder="Enter password"
          onChangeText={(text)=> setPass(text)}
          secureTextEntry
          > 
          </TextInput>
          <TextInput style = { styles.input}
          placeholder="Confirm password"
          onChangeText={(text)=> setPassCheck(text)}
          secureTextEntry
          >
          </TextInput>
           
          <Text marginBottom={20}
          >
             If the submit button is greyed out, it either means your password isn't safe, above 10 characters in length and contain at least one number, or they don't match.
           </Text>
      <Button style = {{width: 20}}
    size = {50}
    onPress={() => alert(password + username + passCheck)}
    title="Click here!"
    accessibilityLabel="Click this button to see a message"
      />
      <Text>  </Text>
            <Button
    size = {50}
            style = {{width: "5%"}}
    onPress={() => 
    axios.post("http://"+config()+"/333ibghw3/index.php/user/list?username="+username+"&password="+password).then((response) => {
      console.log(response); })
      // if (response === "Error:"):
      // alert("There's a duplicate");

    }
   
    title="Add to database!"
    color="#841584"
    accessibilityLabel="Click this button to see a message"
      />

<Button
title = "go to login screen"
onPress={() => navigation.navigate("LoginFunc")}/>

        </View>
      // )
      }
      </SafeAreaView>
    // </View>
  );
    // }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

