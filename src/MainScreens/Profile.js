//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Profile = ({ handleLogin, navigation }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Profile Screen</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginComponent')} >
        <Text style={styles.textLogin}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};
//Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 320,
    backgroundColor: '#00B2EE',

    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    width: 100,
    alignSelf: 'center',
    height: 45,
    fontSize:12,
  },
  textLogin:{
    color: 'white',
    fontWeight: 'bold',

    alignSelf:'center',
  },
});

export default Profile;
