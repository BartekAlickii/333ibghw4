import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet, ScrollView } from "react-native"; 
import { Component } from "react/cjs/react.production.min";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import config from "./config";
import LoginFunc from './login';
// import {username} from './login';


import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';



const CONTENT = {
    tableHead: ['ID', 'Username', 'Song', 'Artist', 'Rating'],
    tableData: [
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
    ],
  };

  export default function Reviewboard({ navigation }) {

    console.log("SWAAAAAAAAAAAAAAAAAAG");
    console.log(username);

    const [myData, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [passCheck, setPassCheck] = useState("");

    

    useEffect(() => {
        axios
          .get("http://"+config()+"/333ibghw3/index.php/user/list?limit=20")
          .then((response) => {
            const rd = response.data
            const answer = rd.map(item=>[item.id, item.username, item.song, item.artist, item.rating])
            setData(answer);
            // console.log("öoooooga");
            // console.log(answer);
            console.log("KSLD:JFSJDFS");
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <ScrollView>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[.5, 1.1, 2, 1.5, .7]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
      
            <Rows
              data={myData}
              flexArr={[.5, 1.1, 2, 1.5, .7]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      </ScrollView>
    );
  }
    
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: 'orange' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#2ecc71' },
    row: { height: 28 },
    text: { textAlign: 'center' },
  });


  
