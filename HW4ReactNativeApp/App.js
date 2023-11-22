import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Text, TextInput, View, Button, StyleSheet, TouchableOpacity } from "react-native"; 
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
        <Icon name="music" size={40} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>
          Song Rater
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpFunc")}
        style={{backgroundColor: '#001F3F', borderRadius: 5, marginBottom: 20, marginTop: 20, padding: 10 }}
      >
        <Text style={{fontSize: 20, color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginFunc")}
        style={{backgroundColor: '#001F3F', borderRadius: 5, marginBottom: 20, marginTop: 20, padding: 10 }}
      >
        <Text style={{fontSize: 20, color: 'white' }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Reviewboard")}
        style={{backgroundColor: '#001F3F', borderRadius: 5, marginBottom: 20, marginTop: 20, padding: 10 }}
      >
        <Text style={{fontSize: 20, color: 'white' }}>Reviewboard</Text>
      </TouchableOpacity>
    </View>
  );
};


const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


export default MyStack;