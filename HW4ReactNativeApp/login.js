import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet } from "react-native"; 
import config from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginFunc({navigation}) {
    const [username, setUsername] = useState("");     //initialize some consts to store things
    const [password, setPass] = useState("");
    const [realuser, setUser] = useState("");
    const [enable, setEnable] = useState('false');

    useEffect(
      ()=> {
      AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
          console.log("updatedstorage login");
              const z = JSON.stringify({[store[i][0]]: store[i][1]});
              setUser(z.slice(13, (z.length-2)));
              return true;
            });
          });
        })
  }, []);

      return (
      <SafeAreaView style={{flex: 1, padding:24, width: 350}}>
      {
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <TextInput style = { styles.input}        //text input for username
          placeholder="Enter username"
          onChangeText={(text)=> setUsername(text)}> 
          </TextInput>
          <TextInput style = { styles.input}      //text input for password
          onChangeText={(text)=> setPass(text)}
          placeholder="Enter password"
          secureTextEntry
          > 
          </TextInput>  
      <Text>  </Text>
            <Button
    size = {50}

    onPress={() => 
    axios.get("http://"+config()+"/333ibghw3/index.php/user/login?username="+username+"&password="+password).then((response) => {   //login user if they exist, else asyncstorage isn't set
      const a = JSON.stringify(response.data)
      // alert(a)
      const b = a.slice(1, (a.length-1))
    if (b !== "Passwords do not match :/" && b !== "Username doesn't exist :/"){    //can tell they don't exist if error message is given. alert user
      AsyncStorage.setItem('loggedIn',  username);
      setEnable("true");}else {alert(b)}
    })
  }
    title="Login!"
    accessibilityLabel="Click this button to login"
      />
      <Text>  </Text>
      <Button                                           //button to go to the reviewboard, hidden if you're not logged in
      disabled = {enable === 'false'}
title = "go to reviewboard"
onPress={() => navigation.navigate("Reviewboard")}
color="#841584"
/>
<Text>  </Text>

{/* <Button title="Clear Async Storage (for debugging)"     //for debugging
onPress={async() => {
      setEnable("false");
    AsyncStorage.clear();
  }
  }>
</Button> */}

  {/* <Button
  size = {50}
  title = "confirm username is correct"
  onPress={()=>AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log("fart");
        console.log({ [store[i][0]]: store[i][1] });
        const z = JSON.stringify({[store[i][0]]: store[i][1]});
        setUser(z.slice(13, (z.length-2)));
        alert (realuser);
        return true;
      });
    });
  })}
  /> */}
        {/* <Button
    size = {50}
    onPress={() => alert(password + username)}
    title="reveal password and username!"
    accessibilityLabel="Click this button to see a message"
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

