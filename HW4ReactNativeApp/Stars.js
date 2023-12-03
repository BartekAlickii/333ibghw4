import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function StarRating({ rating }) {
  const totalStars = 5; // Total number of stars
  const filledStars = Math.floor(rating); // Number of filled stars based on the rating

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i < filledStars ? 'star' : 'star-border'}
          size={32}
          style={styles.starSelected}
        />
      );
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starSelected: {
    color: '#ffb300', // Yellow color for filled stars
  },
});
