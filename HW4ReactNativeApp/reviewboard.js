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
//for search
const [searchTerm, setSearchTerm] = useState("");

console.log(username);

const [myData, setData] = useState([]);
const [username, setUsername] = useState("");
const [realuser, setUser] = useState("");

const dummyData = [
[1, 'test1', 'Drake', 'Controller', 4],
[2, 'test2', 'Kanye', 'Heartless', 5],
[3, 'test3', 'SZA', 'Snooze', 3],
];

const filteredData = myData.filter(item =>
item.some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
);


useEffect(
() => {
setData(dummyData);
axios
.get("http://"+config()+"/333ibghw3/index.php/user/list?limit=20")
.then((response) => {
const rd = response.data
const answer = rd.map(item=>[item.id, item.username, item.song, item.artist, item.rating])
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


<ScrollView style={{backgroundColor: 'rgb(173, 216, 230)'}}>
<Button
title = "Tell us about a song you've heard :) (add song)"
onPress={() => navigation.navigate("AddSongFunc")}/>
{/* <View style={styles.container}> */}
<Text style = {{marginBottom: 15, marginTop: 10}}> Welcome {realuser} to the review board!!!</Text>
<Text style = {{marginBottom: 15}}> If you don't see the song you've added, try pressing the back button, and then returning</Text>

{/*Search input*/}
<TextInput
style={styles.searchInput}
placeholder="Search..."
value={searchTerm}
onChangeText={text => setSearchTerm(text)}
/>

<Table borderStyle={{ borderWidth: 1, borderColor: 'white'  }}>
<Row
data={CONTENT.tableHead}
flexArr={[.5, 1.1, 2, 1.5, .7]}
style={styles.head}
textStyle={styles.text}
/>
<TableWrapper style={styles.wrapper}>
<Rows
data={filteredData}
flexArr={[.5, 1.1, 2, 1.5, .7]}
style={styles.row}
textStyle={styles.rowText}
/>
</TableWrapper>
</Table>
{/* </View> */}
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
head: { height: 40, backgroundColor: 'rgb(0, 31, 63)' },
wrapper: { flexDirection: 'row' },
title: { flex: 1, backgroundColor: '#2ecc71' },
row: { flexDirection: 'row' },
text: { textAlign: 'center', margin: 3, color: 'white' },

row: { 
flexDirection: 'row', 
height: 50,
backgroundColor: 'rgba(78, 145, 227, 0.7)',
borderBottomWidth: 1,
borderColor: 'rgba(0, 0, 0, 0.1)',
},

rowText: { 
textAlign: 'center', 
margin: 3, 
color: 'black',
fontWeight: 'bold',
fontFamily: 'Noto Sans',
fontSize: 16,
},

searchInput: {
backgroundColor: 'white',
borderRadius: 50,
height: 40,
borderColor: 'black',
borderWidth: 1,
marginBottom: 10,
paddingHorizontal: 10,
},
});