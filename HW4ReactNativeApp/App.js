import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Text, View, Button } from "react-native"; 
import SignUpFunc from './signup';
import LoginFunc from './login';
import Reviewboard from './reviewboard';
import AddSongFunc from './addsong';

const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen             //create homescreen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        /> 
          <Stack.Screen           //create an addsong screen
          name="AddSongFunc"
          component={AddSongFunc}
          options={{ title: "Tell us about a song you've heard :) (add song)" }}
        />
        <Stack.Screen             //create reviewboard screen
          name="Reviewboard"
          component={Reviewboard}
          options={{ title: "Reviewboard" }}
        /> 
        <Stack.Screen             //create signup screen
          name="SignUpFunc"
          component={SignUpFunc}
          options={{ title: "Please sign up at the link below" }}
        />
            <Stack.Screen         //create a login screen
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
    <View>
      <Text>  </Text>
    <Button                   //button to go to sign up page
    title="Go to the sign up page"
    onPress={() => navigation.navigate("SignUpFunc")}
  />
  <Text>  </Text>
      <Button                           //button to go to login page
      style = {{margin:24}}
      title="Go to the login page"
    onPress={() => navigation.navigate("LoginFunc")}
  />  
  </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


export default MyStack;