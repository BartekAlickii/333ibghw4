import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet } from "react-native"; 
import config from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddSongFunc({navigation}) {
    const [realuser, setUser] = useState("");
    const [song, setSong] = useState("");
    const [artist, setArtist] = useState("");
    const [rating, setRating] = useState("");           //define some constants to store things

    function handleChange(anum) {                   // make sure user input for rating is valid (between 1 and 5)
        if (Number(anum) > 5 || Number(anum) < 1)
            return setRating(""); 
        setRating(anum);
    }

    myClickHandler = () => {                                                //try adding the song to the database, if fails, woof :/
        var woof = "http://"+config()+"/333ibghw3/index.php/user/add?username="+realuser+"&song="+song+"&artist="+artist+"&rating="+rating;
        axios.post(woof)
        .catch((error) => alert ("damn"));
      }

    useEffect(                                                          //get the username from async storage
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
          <TextInput style = { styles.input}                    //input field for song
          placeholder="Enter song"
          onChangeText={(text)=> setSong(text)}> 
          </TextInput>
          <TextInput style = { styles.input}                    //input field for artist
          onChangeText={(text)=> setArtist(text)}
          placeholder="Enter artist"
          > 
          </TextInput>
        <TextInput style = { styles.input}                    //input field for rating
            keyboardType = 'numeric'
            placeholder="Enter rating"
            value = {rating}
          onChangeText ={(num) => handleChange(num)}   
          > 
          
          </TextInput>  

      <Text>  </Text>
      <Button                                                   //button to add the entered song
    size = {50}
    onPress={() => myClickHandler()}
    title="Add the song"
    accessibilityLabel="Click this button to add the song"
      />
           
<Text></Text>


<Button                                                         //button to go to the reviewboard
title = "go to reviewboard"
color="#841584"
onPress={() => navigation.navigate("Reviewboard")}/>

{/* <Text>  </Text>

<Button title="Clear Async Storage (for debugging)" onPress={async() => {           //debugging stuff
    AsyncStorage.clear();
  }
  }>
  <Text>Clear Async Storage</Text>
</Button> */}

{/* <Button                                                                         //debugging stuff
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

