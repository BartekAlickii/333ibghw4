import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet } from "react-native"; 
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
      // alert(realuser)
      // alert("oogabooga")
      // alert("wtf: "+Object.prototype.toString.call(x))
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
      // alert("wtf: "+Object.prototype.toString.call(x))
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
      AsyncStorage.setItem('loggedIn',  username)
      AsyncStorage.setItem('fake',  JSON.stringify(username))

      ;
    // alert("You logged in muahahah, enjoy your stay " + username)
    
    // localStorage.setitem()

    })}
    title="Login!"
    color="#841584"
    accessibilityLabel="Click this button to login"
      />

<Button
  size = {50}
  title = "print username33"
  onPress={()=>
    alert((AsyncStorage.getItem('loggedIn'))[0])
    // console.log((JSON.parse(AsyncStorage.getItem("loggedIn"))).loggedIn)
}
  /> 

{/* <Button
  size = {50}
  title = "print usernameasdjf;"
  onPress={()=>getData()
    // alert((AsyncStorage.getItem('loggedIn'))[0])
    // console.log((JSON.parse(AsyncStorage.getItem("loggedIn"))).loggedIn)
}  />  */}

<Button
  size = {50}
  title = "print username FART"
  onPress={()=>testingswag()
        // alert((AsyncStorage.getItem('loggedIn'))[0])
    // console.log((JSON.parse(AsyncStorage.getItem("loggedIn"))).loggedIn)
}/>

  <Button
  size = {50}
  title = "print storage?"
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
  />

<Button
title = "go to reviewboard"
onPress={() => navigation.navigate("Reviewboard")}/>


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



{/* <Button
  size = {50}
  title = "print username"
  onPress={()=>alert(JSON.parse(AsyncStorage.getItem('logged in')))}
  /> */}
  {/* // onPress={()=> */}
  {/* //   // alert(JSON.parse(AsyncStorage.getItem('logged in')))
  //   // console.log((JSON.parse(AsyncStorage.getItem("loggedIn"))).loggedIn)
  //   console.log((AsyncStorage.getItem("loggedIn")).json)
  // } */}
  
  {/* <Button

  size = {50}
  title = "print username i hope 2"
  onPress = {()=>
    AsyncStorage.getItem('key')
  .then( value => console.log(value+"ooga") )
  }
  /> */}

  
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

    {/* <Button
    size = {50}
    title="Pick me!"
    color="#841584"
    accessibilityLabel="Click this button to login"
    onPress={() =>
      async () => {const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser+"ooga");}
    }
      /> */}