//Nguyễn Ngô Thế Cường 21521905
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const FeedbackList = ({ data, darkMode }) => {
  return (
    <ScrollView style={styles.listContainer}>
      {data.map((feedback, index) => (   
          <Text style={darkMode ? styles.darkText : styles.lightText}>Q: {feedback}</Text>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 20,
    maxHeight: 200,
  },
  feedbackItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  lightText: {
    fontSize:17,
    marginLeft:30,
    color: '#000000', 
  },
  darkText: {
    fontSize:17,
    marginLeft:30,
    color: '#ffffff', 
  },
});

export default FeedbackList;
