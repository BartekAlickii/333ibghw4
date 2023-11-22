import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet } from "react-native"; 
import config from "./config";


export default function SignUpFunc({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [passCheck, setPassCheck] = useState("");     //create constants to store values


      return (
      <SafeAreaView style={{flex: 1, margin: 8, padding: 5,  width: 380}}>
      {
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <TextInput style = { styles.input}        //create text input for username
          placeholder="Enter username"
          onChangeText={(text)=> setUsername(text)}> 
          </TextInput>

          <TextInput style = { styles.input}       //create text input for password
          placeholder="Enter password"
          onChangeText={(text)=> setPass(text)}
          secureTextEntry
          > 
          </TextInput>
          <TextInput style = { styles.input}       //create text input for confirming password
          placeholder="Confirm password"
          onChangeText={(text)=> setPassCheck(text)}
          secureTextEntry
          >
          </TextInput>
           
          <Text marginBottom={20} //explains why sign up button is grey
          >
             If the submit button is greyed out, it either means your password isn't safe, isn't above 10 characters in length, doesn't contain at least one number, or both passwords don't match.
           </Text>

            <Button
    size = {50}
    onPress={() => 
    axios.post("http://"+config()+"/333ibghw3/index.php/user/list?username="+username+"&password="+password).then((response) => { //adds user the database, ie. signs them up
      console.log(response); })
    }
    disabled = {username == '' || password == '' || password.length <= 10 || password !== passCheck  || //button is disabled under these descriptions, detailed above
    // passCheck.match(/\d/) 
    !/\d/.test(passCheck)
  }
    title="Sign up"
    accessibilityLabel="Click this button to see a message"
      />
      <Text></Text>

<Button     //button to take you to login screen
title = "go to login screen"
color="#841584"
onPress={() => navigation.navigate("LoginFunc")}/>
      <Text></Text>

{/* <Button                                                //debugging stuff
    size = {50}
    onPress={() => alert(password + username + passCheck)}
    title="Print all input text (debug)!"
    accessibilityLabel="Click this button to see a message"
      /> */}

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

