import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditScreen = ({ navigation, route }) => {
  const { id, username, song, artist, rating } = route.params;

  const [editedSong, setEditedSong] = useState(song);
  const [editedArtist, setEditedArtist] = useState(artist);
  const [editedRating, setEditedRating] = useState(rating.toString());

  const handleSave = () => {
    console.log('Updated Song:', editedSong);
    console.log('Updated Artist:', editedArtist);
    console.log('Updated Rating:', editedRating);

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID:</Text>
      <Text style={styles.text}>{id}</Text>

      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>{username}</Text>

      <Text style={styles.label}>Edit Song:</Text>
      <TextInput
        style={styles.input}
        value={editedSong}
        onChangeText={setEditedSong}
        placeholder="Enter edited song"
      />

      <Text style={styles.label}>Edit Artist:</Text>
      <TextInput
        style={styles.input}
        value={editedArtist}
        onChangeText={setEditedArtist}
        placeholder="Enter edited artist"
      />

      <Text style={styles.label}>Edit Rating:</Text>
      <TextInput
        style={styles.input}
        value={editedRating}
        onChangeText={setEditedRating}
        placeholder="Enter edited rating"
        keyboardType="numeric"
      />

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
