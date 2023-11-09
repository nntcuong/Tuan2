//Nguyễn Ngô Thế Cường 21521905
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const Header = ({ darkMode }) => {
  return (
    <View style={[styles.header, darkMode && styles.darkHeader]}>
      <Image
        source={{
          uri: 'https://internet-israel.com/wp-content/uploads/2018/07/React_Native_Logo-450x236.png',
        }}
        style={styles.image}
      />
      <Text style={[styles.text, darkMode && styles.darkText]}>React Native App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000000', 
  },
  darkText: {
    color: '#ffffff',
  },
  image: {
    width: 80,
    height: 80,
    top: 5,
    marginTop: 60,
    borderRadius: 50,
  },
});
export default Header;
