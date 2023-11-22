import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"; 
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


      return (
        
        
      <SafeAreaView style={{flex: 1, padding:24}}>
        
      {
        
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: 'rgb(173, 216, 230)'
          }}
        >
          <TextInput
          style = {styles.input}
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
           
          <Text>
  If the submit button is greyed out, it may be due to the following reasons:
</Text>
<Text>
  {/*\u2022 is unicode for bullet point*/}
  {"\u2022"} Your password isn't safe.
</Text>
<Text>
  {"\u2022"} Password should be above 10 characters in length.
</Text>
<Text>
  {"\u2022"} Password should contain at least one number.
</Text>
<Text>
  {"\u2022"} The passwords entered don't match.
</Text>
      <TouchableOpacity
      onPress={() => alert(password + username + passCheck)}
      style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 5,
      marginTop: 20, padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to see a message!"
    >
      <Text style={{fontSize: 20, color: 'white'}}>Click here!</Text>
    </TouchableOpacity>
    <TouchableOpacity
    size = {50}
    style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 5,
      marginTop: 20, padding: 10, alignSelf: 'center',}}
    onPress={() => 
    axios.post("http://"+config()+"/333ibghw3/index.php/user/list?username="+username+"&password="+password).then((response) => {
      console.log(response); })}
      accessibilityLabel="Click this button to add to database!"
      >

      <Text style={{fontSize: 20, color: "#AD65B2"}}>
      Add to Database!
      </Text>
      </TouchableOpacity>

<TouchableOpacity
onPress={() => navigation.navigate("LoginFunc")}
style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 5,
      marginTop: 20, padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to go to login screen!"
>
  <Text style={{fontSize: 20, color: 'white'}}>
    Go to login screen!
  </Text>
</TouchableOpacity>

</View>
}
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10, // Rounded borders
    borderColor: 'white', // Border color
    padding: 10,
    backgroundColor: 'white', // White fill color
  },
});

