import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet } from "react-native"; 
import { Component } from "react/cjs/react.production.min";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import config from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginFunc() {
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");

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
          onChangeText={(text)=> setPass(text)}
          placeholder="Enter password"
          secureTextEntry
          > 
          </TextInput>  
      <Button
    size = {50}
    onPress={() => alert(password + username)}
    title="reveal password and username!"
    accessibilityLabel="Click this button to see a message"
      />
      <Text>  </Text>
            <Button
    size = {50}

    onPress={() => 
    axios.get("http://"+config()+"/333ibghw3/index.php/user/login?username="+username+"&password="+password).then((response) => {
      // console.log(response)
      AsyncStorage.setItem('loggedIn', username)
      ;
    // alert("You logged in muahahah, enjoy your stay " + username)
    
    // localStorage.setitem()

    })}
    title="Login!"
    color="#841584"
    accessibilityLabel="Click this button to login"
      />

{/* <Button
  size = {50}
  title = "print username"
  onPress={()=>alert(JSON.parse(AsyncStorage.getItem('logged in')))}
  /> */}
  <Button

  size = {50}
  title = "print username i hope 2"
  // onPress={()=>
  //   // alert(JSON.parse(AsyncStorage.getItem('logged in')))
  //   // console.log((JSON.parse(AsyncStorage.getItem("loggedIn"))).loggedIn)
  //   console.log((AsyncStorage.getItem("loggedIn")).json)

  // }

  onPress = {()=>
    AsyncStorage.getItem('key')
  .then( value => console.log(value+"ooga") )
  }
  />



<Button
  size = {50}
  title = "print username"
  onPress={()=>console.log((AsyncStorage.getItem('loggedIn').json))}
  /> 

  <Button
  size = {50}
  title = "print storage?"
  onPress={()=>AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({ [store[i][0]]: store[i][1] });
        return true;
      });
    });
  })}
  />
      {/* <Button
    size = {50}

    onPress={() => 
    axios.get("http://"+config()+"/333ibghw3/index.php/user/loggedin?username="+username+"&password="+password).then((response) => {
    //   console.log(response);
    alert("You logged in muahahah, enjoy your stay " + username)
    })}
    title="Attempt to determine logged in status!"
    color="#841584"
    accessibilityLabel="Click this button to login"
      /> */}

        {/* <Button
      title="If you're "
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    /> */}
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
  },
});

// export default SignUpConst;


