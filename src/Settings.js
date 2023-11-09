//Nguyễn Ngô Thế Cường 21521905
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = ({ darkMode, setDarkMode, notificationEnabled, setNotificationEnabled }) => {
  const handleDarkModeChange = (value) => {
    setDarkMode(value);
  };

  
  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingItem}>
        <Text style={[styles.text, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={handleDarkModeChange} />
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.text, darkMode && styles.darkText]}>Notification</Text>
        <Switch value={notificationEnabled} onValueChange={setNotificationEnabled} />
      </View>
      <Text style={[styles.feedback, darkMode && styles.darkText]}>Feedback</Text>
    </View>
  );
};
//Nguyễn Ngô Thế Cường 21521905
const styles = StyleSheet.create({
  settingsContainer: {
    width: '80%',
    marginTop: 70,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  darkHeader: {
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 15,
    marginTop: 5,
    color: '#000000', 
  },
  darkText: {
    color: '#ffffff',
  },
  feedback: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
    marginLeft:-10,
  },
});

export default Settings;
