//Nguyễn Ngô Thế Cường 21521905
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import Header from './src/Header';
import Settings from './src/Settings';
import FeedbackInput from './src/FeedbackInput';
import FeedbackList from './src/FeedbackList';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    if (darkMode) {
      StatusBar.setBarStyle('light-content');
    } else {
      StatusBar.setBarStyle('dark-content');
    }
  }, [darkMode]);

  const handleSendFeedback = (feedback) => {
    if (feedback.trim() === '') {
      return;
    }
    if (notificationEnabled ) {
      setFeedbackList([feedback, ...feedbackList]); 
      alert('Thank you for your feedback'); 
    }
      else {
        setFeedbackList([feedback, ...feedbackList]); 
      }
    
  };
//Nguyễn Ngô Thế Cường 21521905
  return (
    <ScrollView contentContainerStyle={darkMode ? styles.darkContainer : styles.container}>
      <Header darkMode={darkMode} />
      <Settings
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        notificationEnabled={notificationEnabled}
        setNotificationEnabled={setNotificationEnabled}
      />
      <FeedbackInput onSubmit={handleSendFeedback} darkMode={darkMode} />
      <FeedbackList data={feedbackList} darkMode={darkMode} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
    backgroundColor: '#ffffff', 
  },
  darkContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
    backgroundColor: '#000000', 
  },
});
