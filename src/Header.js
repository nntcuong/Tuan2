//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
            <Text style={styles.headerText}> Social Media Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1E90FF',
    padding: 20,
    alignItems: 'center',
    marginTop:30,
    
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
   
  },
});

export default Header;
