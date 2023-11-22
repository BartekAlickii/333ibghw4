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
          options={{ title: "Home", headerTitleAlign: 'left', //moves "Home" header to the left
        }}  
        /> 
        

        <Stack.Screen
          name="Reviewboard"
          component={Reviewboard}
          options={({ navigation }) => ({
            title: "Review Songs Here!",
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-left" size={24} color="black" style={{ marginLeft: 15 }} />
              </TouchableOpacity>
            ),
          })}
        
        /> 
        <Stack.Screen
          name="SignUpFunc"
          component={SignUpFunc}
          options={({ navigation }) => ({
            title: "Register Here!",
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-left" size={24} color="black" style={{ marginLeft: 15 }} />
              </TouchableOpacity>
            ),
          })}
        />
            <Stack.Screen
          name="LoginFunc"
          component={LoginFunc}
          options={({ navigation }) => ({
            title: "Log in!",
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-left" size={24} color="black" style={{ marginLeft: 15 }} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgb(173, 216, 230)' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Display a music icon next to the "Song Rater" text */}
        <Icon name="music" size={40} color="black" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>
          Song Rater
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpFunc")}
        style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20, marginTop: 20, padding: 10 }}
      >
        <Text style={{fontSize: 20, color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginFunc")}
        style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20, marginTop: 20, padding: 10 }}
      >
        <Text style={{fontSize: 20, color: 'white' }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Reviewboard")}
        style={{backgroundColor: 'rgb(0, 31, 63)', borderRadius: 5, marginBottom: 20, marginTop: 20, padding: 10 }}
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