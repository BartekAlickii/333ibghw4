import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Text, TextInput, View, Button } from "react-native"; 
import {SignUpFunc} from './signup';


const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        /> 
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
          options={{ title: "Please sign up at the link below" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Button
      title="Go to Jane's profile bro"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
    <Button
    title="Go to the sign up page"
    onPress={() => navigation.navigate("SignUp2")}
  />
  </View>
  );
};

const SignUp2 = ({ navigation }) => {

  return   <Text>{SignUpFunc()}</Text>;

  // <View> 
  // </View>;
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default MyStack;