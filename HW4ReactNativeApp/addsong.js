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


export default function AddSongFunc({navigation}) {
    const [realuser, setUser] = useState("");
    const [song, setSong] = useState("");
    const [artist, setArtist] = useState("");
    const [rating, setRating] = useState("");

    function handleChange(anum) {
        if (Number(anum) > 5 || Number(anum) < 1)
            return setRating(""); 
        setRating(anum);
    }

    myClickHandler = () => {
        var woof = "http://"+config()+"/333ibghw3/index.php/user/add?username="+realuser+"&song="+song+"&artist="+artist+"&rating="+rating;
        axios.post(woof)
        .catch((error) => alert ("damn"));
      }

    useEffect(
        ()=>{AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          stores.map((result, i, store) => {
            console.log("updatedstorage");
            const z = JSON.stringify({[store[i][0]]: store[i][1]});
            setUser(z.slice(13, (z.length-2)));
            return true;
          });
        });
      })}
      , []);

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
          placeholder="Enter song"
          onChangeText={(text)=> setSong(text)}> 
          </TextInput>
          <TextInput style = { styles.input}
          onChangeText={(text)=> setArtist(text)}
          placeholder="Enter artist"
          > 
          </TextInput>
        <TextInput style = { styles.input}
            keyboardType = 'numeric'
            placeholder="Enter rating"
            value = {rating}
          onChangeText ={(num) => handleChange(num)}   
          > 
          
          </TextInput>  

      <Text>  </Text>
      <Button
    size = {50}
    onPress={() => myClickHandler()}
    title="Add the song"
    accessibilityLabel="Click this button to see a message"
      />

      <Text>  </Text>

            <Button
    size = {50}

    onPress={() => 
    axios.get("http://"+config()+"/333ibghw3/index.php/user/login?username="+username+"&password="+password).then((response) => {
      AsyncStorage.setItem('loggedIn',  username);
    })}
    title="Login!"
    color="#841584"
    accessibilityLabel="Click this button to login"
      />
      <Text>  </Text>

<Button title="Clear Async Storage (for debugging)" onPress={async() => {
    AsyncStorage.clear();
  }
  }>
  <Text>Clear Async Storage</Text>
</Button>


  <Button
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

