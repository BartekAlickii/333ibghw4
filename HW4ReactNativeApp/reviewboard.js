import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
// Import StarRatingNonInteractable and StarRating components but in React Native
// import { FaPencilAlt } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";

function Reviewboard() {
  const [myData, setData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editedItemId, setEditedItemId] = useState(null);

  const filteredData = myData.filter((item) =>
  item.artist.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleEdit = (item) => {
  setEditedItem(item);
  setEditedItemId(item.id); // Store the ID of the edited song
  setShowEditModal(true);
  
};

const handleCancelEdit = () => {
  setShowEditModal(false);
};
const handleCancelDelete = () => {
  setShowDeleteModal(false);
};
// http://localhost/333ibghw3/index.php/user/edit?id=11&username=Bartek&artist=Vacations&song=Relax&rating=4
const handleSaveEdit = () => {
  axios
  .put("http://localhost/333ibghw3/index.php/user/edit?id="+editedItem.id+"&username="+localStorage.getItem("logged in")+"&song="+editedItem.song+"&artist="+editedItem.artist+"&rating="+editedItem.rating)
  .then((response) => {
    // setData(response.data);
  })
  .catch((error) => {
    console.log(error);
  alert(("http://localhost/333ibghw3/index.php/user/edit?id="+editedItem.id+"&username="+localStorage.getItem("logged in")+"&song="+editedItem.song+"&artist="+editedItem.artist+"&rating="+editedItem.rating))
  });

  //Handle saving the edited item
  console.log("Edited Item:", editedItem); // Print the edited item to the console
  setShowEditModal(false);
  window.location.reload(false);

};


const handleSaveDelete = () => {
  axios
  .delete("http://localhost/333ibghw3/index.php/user/delete?username="+localStorage.getItem("logged in")+"&song="+deletedItem.song+"&artist="+deletedItem.artist)
  .then((response) => {
  })
  .catch((error) => {
    console.log(error);
  });
  
  // Handle saving the edited item
  console.log("Deleted Item:", deletedItem); // Print the edited item to the console
  setShowDeleteModal(false);
  window.location.reload(false);

};


const handleDelete = (item) =>
{
    setDeletedItem(item);
    setShowDeleteModal(true);
}



useEffect(() => {
  axios
    .get("http://localhost/333ibghw3/index.php/user/list?limit=20")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);



  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        style={{ borderRadius: 10, padding: 5 }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const userIsUser = localStorage.getItem('logged in') === item.username;
          return (
            <View key={item.id}>
              <Text style={{ textAlign: 'center' }}>{item.username}</Text>
              <Text style={{ textAlign: 'center' }}>{item.artist}</Text>
              <Text style={{ textAlign: 'center' }}>{item.song}</Text>
              {/* Render StarRatingNonInteractable */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {/* Render StarRatingNonInteractable component or appropriate rating visualization */}
                <Text>Rating: {item.rating}</Text>
              </View>
              <Text style={{ textAlign: 'center' }}>ID: {item.id}</Text>
              {userIsUser && (
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  {/* Render edit icon */}
                  {/* For example: <Icon name="edit" size={24} color="black" /> */}
                </TouchableOpacity>
              )}
              {userIsUser && (
                <TouchableOpacity onPress={() => handleDelete(item)}>
                  {/* Render delete icon */}
                  {/* For example: <Icon name="trash" size={24} color="black" /> */}
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />

      {/* Edit and Delete Modals */}
      {/* Implement Modals using React Native components and similar logic */}
    </View>
  );
}

export default Reviewboard;
