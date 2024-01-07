import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const EditScreen = ({ navigation, route }) => {
  const { id, username, song, artist, rating } = route.params;

  const [editedSong, setEditedSong] = useState(song);
  const [editedArtist, setEditedArtist] = useState(artist);
  const [editedRating, setEditedRating] = useState(rating.toString());
  const [invalidInput, setInvalidInput] = useState(false);

const handleRatingChange = (text) => {
  setEditedRating(text); // Update the rating as the user types
};

  const handleSave = () => {
    const numericValue = parseInt(editedRating);
    if (!isNaN(numericValue) && Number.isInteger(numericValue) && numericValue >= 0 && numericValue <= 5) {
      // Implement PUT request using Axios to update the item
      axios
        .put(`http://localhost/333ibghw3/index.php/user/edit?id=${id}&username=${username}&song=${editedSong}&artist=${editedArtist}&rating=${editedRating}`)
        .then((response) => {
          console.log('Item updated successfully:', response.data);
          navigation.goBack(); // Navigate back on successful update
        })
        .catch((error) => {
          console.error('Error updating item:', error);
          Alert.alert('Error', 'Failed to update item. Please try again.');
        });
    } else {
      setInvalidInput(true); // Set invalid input flag if the input is invalid
      Alert.alert('Invalid Rating', 'Please enter a single-digit integer between 0 and 5 for the rating.');
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    // Laying out the selected review in a visible/clear way with options to edit appropriate fields. 
    <View style={styles.container}>
      
      {/* ID */}
      <Text style={styles.label}>ID:</Text>
      <Text style={styles.text}>{id}</Text>

      {/* Username */}
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>{username}</Text>

      {/* Song */}
      <Text style={styles.label}>Edit Song:</Text>
      <TextInput
        style={styles.input}
        value={editedSong}
        onChangeText={setEditedSong}
        placeholder="Enter edited song"
      />

      {/* Artist */}
      <Text style={styles.label}>Edit Artist:</Text>
      <TextInput
        style={styles.input}
        value={editedArtist}
        onChangeText={setEditedArtist}
        placeholder="Enter edited artist"
      />
      
      {/* Rating */}
      <Text style={styles.label}>Edit Rating:</Text>
      <TextInput
        style={styles.input}
        value={editedRating}
        onChangeText={handleRatingChange}
        placeholder="Enter edited rating"
        keyboardType="numeric"
      />
      {invalidInput && <Text style={{ color: 'red' }}>Please enter a valid rating (0-5).</Text>}
      
      {/* Buttons for the user to choose to save changes or cancel the Edit operation.  */}
      <Button title="Save Changes" onPress={handleSave} />

      <Button title="Cancel" onPress={handleCancel} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 5,
    width: 380,
    flexDirection: 'column',
    backgroundColor: 'rgb(173, 216, 230)', // Blue background color
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EditScreen;
