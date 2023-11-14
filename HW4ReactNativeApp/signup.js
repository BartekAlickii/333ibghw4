import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button } from "react-native"; 
import { Component } from "react/cjs/react.production.min";

export function SignUpFunc() {
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [passCheck, setPassCheck] = useState("");
// export class SignUp extends Component{
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  
//   render() {
      return (
    <View style={{ flex: 1, padding: 24 }}>
      {
      // isLoading ? (
      //   <Text>Loading...</Text>
      // ) : (
       
       
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
        <Text>
          Filler text
          filler text
          filler text
          filler text
           </Text>
          {/* <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            {data.title}
          </Text> */}
          {/* <Text
            style={{
              fontSize: 14,
              color: "green",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Lectures:
          </Text> */}

          <TextInput
          placeholder="Enter username"
          onChangeText={(text)=> setUsername(text)}> 
          </TextInput>
          <TextInput
          placeholder="Enter password"
          onChangeText={(text)=> setPass(text)}
          secureTextEntry
          > 
          </TextInput>
          <TextInput
          placeholder="Enter password"
          onChangeText={(text)=> setPassCheck(text)}
          secureTextEntry
          >
          </TextInput>
           
          <Text>
             If the submit button is greyed out, it either means your password isn't safe, above 10 characters in length and contain at least one number, or they don't match.
           </Text>
           
          <Text> 
            To share a photo from your phone with a friend, just press the button below!
            </Text>
      <Button
    onPress={() => alert(password + username + passCheck)}
    title="Click here!"
    color="#841584"
    accessibilityLabel="Click this button to see a message"
      />
            <Button
    onPress={() => 
    axios.post("http://172.21.64.62/333ibghw3/index.php/user/list?username="+username+"&password="+password).then((response) => {
      console.log(response);
    })}
    title="Add to database!"
    color="#841584"
    accessibilityLabel="Click this button to see a message"
      />
        </View>
      // )
      }
    </View>
  );
    // }
}

// export default SignUpConst;


