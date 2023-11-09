//Nguyễn Ngô Thế Cường 21521905
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackInput = ({ onSubmit, darkMode }) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleSend = () => {
    if (feedback) {
      onSubmit(feedback);
      setFeedback('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, darkMode && styles.darkInput]}
        placeholder="Your feedback here..."
        multiline
        placeholderTextColor={darkMode ? "#808080" : "#000000"}
        value={feedback}
        onChangeText={handleFeedbackChange}
      />
      <Button title="Send Feedback" onPress={handleSend} />
      <Text style={[styles.text, darkMode && styles.darkText]}> Frequently Asked Question</Text>
    </View>
  );
};
//Nguyễn Ngô Thế Cường 21521905
const styles = StyleSheet.create({
  inputContainer: {
    width: '85%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    minHeight: 100,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  darkInput: {
    color: '#ffffff',
    backgroundColor: '#696969',
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 18,
    color: '#000000', 
    marginLeft: -5,
  },
  darkText: {
    color: '#ffffff',
  },
});

export default FeedbackInput;
