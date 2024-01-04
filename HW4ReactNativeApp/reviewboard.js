import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, TextInput, View, Button, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import config from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler'; // Import TouchableOpacity

const CONTENT = {
  tableHead: ['ID', 'Username', 'Song', 'Artist', 'Rating', 'Edit', 'Delete'] // Updated table headers
};

export default function Reviewboard({ navigation }) {
  const [myData, setData] = useState([]);
  const [realuser, setUser] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleEdit = (rowItem) => {
    // Logic to handle editing the row
    console.log("Edit:", rowItem);
  };

  const handleDelete = (rowItem) => {
    // Logic to handle deleting the row
    console.log("Delete:", rowItem);
  };

  useEffect(() => {
    axios
      .get("http://" + config() + "/333ibghw3/index.php/user/list?limit=20")
      .then((response) => {
        const rd = response.data
        const answer = rd.map(item => [item.id, item.username, item.song, item.artist, item.rating])
        setData(answer);
        console.log("mapping from database")
      })
      .catch((error) => {
        console.log(error);
        console.log("ooga");
      });
    console.log("swag");
    
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log("updatedstorage");
          const z = JSON.stringify({ [store[i][0]]: store[i][1] });
          setUser(z.slice(13, (z.length - 2)));
          return true;
        });
      });
    });
  }, []);

  const filteredData = myData.filter(item =>
    item.some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const generateRows = () => {
    const filteredDataWithButtons = filteredData.map((rowData, index) => {
      return [
        ...rowData,
        <TouchableOpacity onPress={() => handleEdit(rowData)}>
          <Icon name="pencil" size={25} color="blue" />
        </TouchableOpacity>,
        <TouchableOpacity onPress={() => handleDelete(rowData)}>
          <Icon name="trash" size={25} color="red" />
        </TouchableOpacity>
      ]
    }) 
    
    return <Rows
      data={filteredDataWithButtons}
      flexArr={[.5, 1.1, 2, 1.5, .7, .7, .7]}
      style={styles.row}
      textStyle={styles.rowText}
    />
  };

  return (
    <ScrollView style={{ backgroundColor: 'rgb(173, 216, 230)' }}>
      <Button
        title="Tell us about a song you've heard :) (add song)"
        onPress={() => navigation.navigate("AddSongFunc")} />
      <Text style={{ marginBottom: 15, marginTop: 10 }}> Welcome {realuser} to the review board!!!</Text>
      <Text style={{ marginBottom: 15 }}> If you don't see the song you've added, try pressing the back button, and then returning</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />

      <Table borderStyle={{ borderWidth: 1, borderColor: 'white' }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[.5, 1.1, 2, 1.5, .7, .7, .7]} // Adjusted for new columns
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          {
            generateRows() 
          }
        </TableWrapper>
      </Table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: 'rgb(0, 31, 63)' },
  wrapper: { flexDirection: 'row' },
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
    // fontFamily: 'Noto Sans',
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
