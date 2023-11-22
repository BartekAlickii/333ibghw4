import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Text, TextInput, View, Button } from "react-native"; 
import SignUpFunc from './signup';
import LoginFunc from './login';
import Reviewboard from './reviewboard';
import Icon from "react-native-vector-icons/FontAwesome"; //to add music note to title

import config from './config';

const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerTitleAlign: 'left',//moves "Home" header to the left
        }}  
        /> 
        

        <Stack.Screen
          name="Reviewboard"
          component={Reviewboard}
          options={{ title: "Reviewboard" }}
        /> 
        <Stack.Screen
          name="SignUpFunc"
          component={SignUpFunc}
          options={{ title: "Please sign up at the link below" }}
        />
            <Stack.Screen
          name="LoginFunc"
          component={LoginFunc}
          options={{ title: "Please login at the link below" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ADD8E6' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Display a music icon next to the "Song Rater" text */}
      <Icon name="music" size={24} color="black" style={{ marginRight: 10 }} /> 
        <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}>
          Song Rater
        </Text>
      </View>
    <Button
    title="Go to the sign up page"
    onPress={() => navigation.navigate("SignUpFunc")}
  />
  <Text>  </Text>
      <Button
      style = {{margin:24}}
      title="Go to the login page"
    onPress={() => navigation.navigate("LoginFunc")}
  />  
   <Text>  </Text>
  <Button
  title="Go to the reviewboard"
  onPress={() => navigation.navigate("Reviewboard")}
/>


  </View>
  );
};

// const SignUp2 = ({ navigation }) => {

//   return   <Text>{SignUpFunc()}</Text>;

//   // <View> 
//   // </View>;
// };

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


// const LoginScreen = ({ navigation}) => {
//   return <Text> {LoginFunc()}</Text>;
// }

export default MyStack;