import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"; 
import { Component } from "react/cjs/react.production.min";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import config from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reviewboard from './reviewboard';
import SignUpFunc from './signup';


export default function LoginFunc(navigation) {

    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [realuser, setUser] = useState("");
    const [fakeuser, setfake] = useState("");

    const getData = async () => {
      try {

        const value = await AsyncStorage.getItem('fake');
        console.log(JSON.parse(value))
        alert(value.toString);
        if (value !== null) {
        alert("merp2")
          alert(value)
        }
      } catch (e) {
        alert("error lel")
      }
    };

    const testingswag = async () => {
      alert(realuser)
      alert("oogabooga")
      try {

        const value = await AsyncStorage.getItem('loggedin');
        console.log(value)
        alert(value.toString);
        if (value !== null) {
        alert("merp2")
          alert(value)
        }
      } catch (e) {
        alert("error lel")
      }
    };

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

      <TouchableOpacity
    onPress={() => alert(password + username)}
    style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20,
      marginTop: 20, padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to see a message"
      >
        <Text style={{fontSize: 20, color: 'white'}}>
        Reveal password and username!
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={() => 
        axios.get("http://"+config()+"/333ibghw3/index.php/user/login?username="+username+"&password="+password).then((response) => {
          AsyncStorage.setItem('loggedIn',  username)
          AsyncStorage.setItem('fake',  JSON.stringify(username))
        })}
        style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20, padding: 10, alignSelf: 'center',}}
        accessibilityLabel="Click this button to login"
        >
          <Text style={{color: "#AD65B2"}}>
            Login!
          </Text>
      </TouchableOpacity>
            
            
      <TouchableOpacity
      onPress={()=> alert((AsyncStorage.getItem('loggedIn'))[0])}
      style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20,
      padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to print username33"
      >
        <Text style={{fontSize: 20, color: 'white'}}>
        Print username33
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={()=>testingswag()}
      style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20,
      padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to print username FART"
      >
        <Text style={{fontSize: 20, color: 'white'}}>
          Print username FART
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={()=>AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          stores.map((result, i, store) => {
            console.log("fart");
            console.log({ [store[i][0]]: store[i][1] });
            console.log("sniff"+JSON.parse({[store[i][0]]: store[i][1]})   );
            setUser({[store[i][0]]: store[i][1]});
            alert({[store[i][0]]: store[i][1]});
            alert(realuser);
            return true;
          });
        });
      })}
      style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20,
      padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to print storage"
      >
        <Text style={{fontSize: 20, color: 'white'}}>
          Print storage?
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={() => navigation.navigate("Reviewboard")}
      style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20,
      padding: 10, alignSelf: 'center',}}
      accessibilityLabel="Click this button to go to reviewboard"
      >
        <Text style={{fontSize: 20, color: 'white'}}>
          Go to reviewboard!
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