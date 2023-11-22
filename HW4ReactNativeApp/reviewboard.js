import React, { useEffect, useState } from "react";
import axios from "axios";
import {Text, TextInput, View, Button, SafeAreaView, StyleSheet, ScrollView } from "react-native"; 
import config from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
    tableHead: ['ID', 'Username', 'Song', 'Artist', 'Rating']
  };

  export default function Reviewboard({ navigation }) {
    console.log(username);

    const [myData, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [realuser, setUser] = useState("");


    useEffect(
        () => {
            axios
              .get("http://"+config()+"/333ibghw3/index.php/user/list?limit=20")
              .then((response) => {
                const rd = response.data
                const answer = rd.map(item=>[item.id, item.username, item.song, item.artist, item.rating])
                setData(answer);
                console.log("mapping from database")
              })
              .catch((error) => {
                console.log(error);
                console.log("ooga");
              });
              console.log("swag")
          }
      ,[]);

    useEffect(
        ()=> {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (error, stores) => {
              stores.map((result, i, store) => {
            console.log("updatedstorage");
                const z = JSON.stringify({[store[i][0]]: store[i][1]});
                setUser(z.slice(13, (z.length-2)));
                return true;
              });
            });
          })
    }, []);

    


    return (

        
        <ScrollView>
                <Button
    title = "Tell us about a song you've heard :) (add song)"
    onPress={() => navigation.navigate("AddSongFunc")}/>
        <Text></Text>
      {/* <View style={styles.container}> */}
        <Text> welcome {realuser} to the review board!!!</Text>
        <Text></Text>
        <Text> If you don't see the song you've added, try pressing the back button, and then returning</Text>
        <Text></Text>

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
      {/* </View> */}
      </ScrollView>
    );
  }
    
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: 'orange' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#2ecc71' },
    row: { flexDirection: 'row' },
    text: { textAlign: 'center', margin: 3 },
  });


  
