// For nicer comments, EditScreen mirrors this file almost exactly just with small changes
// to support the deletion operation/theme.
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const DeleteScreen = ({ navigation, route }) => {
  const { id, username, song, artist, rating } = route.params;

  const handleDelete = () => {
    axios
      .delete(`http://localhost/333ibghw3/index.php/user/delete?id=${id}&username=${username}&song=${song}&artist=${artist}`)
      .then((response) => {
        console.log('Item deleted successfully:', response.data);
        navigation.goBack(); // Navigate back on successful delete
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
        Alert.alert('Error', 'Failed to delete item. Please try again.');
      });
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

      <Text style={styles.label}>Song:</Text>
      <Text style={styles.text}>{song}</Text>

      <Text style={styles.label}>Artist:</Text>
      <Text style={styles.text}>{artist}</Text>

      <Text style={styles.label}>Rating:</Text>
      <Text style={styles.text}>{rating}</Text>

      <Button title="Delete for real this time! Last chance to cancel!" onPress={handleDelete} color="red" />

      <Button title="Cancel" onPress={handleCancel} />
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
});

export default DeleteScreen;
