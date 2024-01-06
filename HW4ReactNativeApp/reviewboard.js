import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, TextInput, View, Button, SafeAreaView, StyleSheet, ScrollView, Alert } from "react-native";
import config from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler'; 
import StarRating from './Stars'; 

const CONTENT = {
  tableHead: ['ID', 'Username', 'Song', 'Artist', 'Rating', 'Edit', 'Delete'] // Updated table headers
};

export default function Reviewboard({ navigation }) {
  const [myData, setData] = useState([]);
  const [realuser, setUser] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  // handleEdit simply pulls the desired row of information and passes it to EditScreen.js after asking for permission.
  const handleEdit = (rowItem) => {
    const [id, username, song, artist, rating] = rowItem;
  
    Alert.alert(
      `Edit Item ID: ${id}?`,
      'Do you want to edit this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Edit',
          onPress: () => {
            navigation.navigate('EditScreen', { id, username, song, artist, rating });
          },
        },
      ]
    );
  };

  // handleDelete mirrors handleEdit just with DeleteScreen in place of Editscreen.
  const handleDelete = (rowItem) => {
    const [id, username, song, artist, rating] = rowItem;
  
    Alert.alert(
      `Delete Item ID: ${id}?`,
      'Do you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Navigate to delete screen',
          onPress: () => {
            navigation.navigate('DeleteScreen', { id, username, song, artist, rating });
          },
        },
      ]
    );
  };
  
  // This block uses axios to pull from the database for the reviews themselves to prepare them for search functionality.
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

  // filteredData for the search functionality to properly operate. 
  const filteredData = myData.filter(item =>
    item.some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // generateRows renders our data with respect to the search functionality.
  const generateRows = () => {
    const filteredDataWithButtons = filteredData.map((rowData, index) => {
    const rating = rowData[4]; // Assuming rating is at index 4, adjust if needed
    
    // setting up check for the visibility of buttons
    const username = rowData[1]; // Assuming username is at index 1

    // Check if the realuser matches the username in the row
    const showButtons = realuser === username;
      
      return [
        
        ...rowData.slice(0, 4), // Existing content before rating, adjust slice range as needed
        <StarRating key={`rating_${index}`} rating={rating} />, // StarRating component
        showButtons ? (
          <TouchableOpacity onPress={() => handleEdit(rowData)}>
            <Icon name="pencil" size={25} color="blue" />
          </TouchableOpacity>
        ) : null,
        showButtons ? (
          <TouchableOpacity onPress={() => handleDelete(rowData)}>
            <Icon name="trash" size={25} color="red" />
          </TouchableOpacity>
        ) : null,
      ]
    }) 
    
    // This is styling for the data itself
    return <Rows
        data={filteredDataWithButtons}
        flexArr={[.5, 1.2, 1.1, 1.5, 1.5, .51, .45]} // Adjusted for new columns
        style={styles.row}
        textStyle={styles.rowText}
      />
  };
// This is the top of the reviewboard display inviting/directing the user to add a song or back out to refresh the reviewboard.
  return (
    <ScrollView style={{ backgroundColor: 'rgb(173, 216, 230)' }}>
      <Button
        title="Tell us about a song you've heard :) (add song)"
        onPress={() => navigation.navigate("AddSongFunc")} />
      <Text style={{ marginBottom: 15, marginTop: 10 }}> Welcome {realuser} to the review board!!!</Text>
      <Text style={{ marginBottom: 15 }}> If you don't see the song you've added/edited/deleted (in the deleted case still visible), try pressing the back button, and then returning</Text>
      {/* This is the search bar/navigation bar:  */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />

      <Table borderStyle={{ borderWidth: 1, borderColor: 'white' }}>
        {/* styling for the table head here to match the rows of data */}
        <Row
          data={CONTENT.tableHead}
          flexArr={[.5, 1.2, 1.1, 1.5, 1.5, .51, .45]} // Adjusted for new columns
          style={styles.head}
          textStyle={styles.text}
        />
        {/* rendering the rows of data literally by calling generateRows */}
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
    // This was commented out for an interesting error we were recieving, but it seems to persist but not cause any issues, so we leave this be...
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
