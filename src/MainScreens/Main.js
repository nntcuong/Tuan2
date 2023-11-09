//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Image } from 'react-native';
import Home from './Home';
import Categories from './Categories';
import Favourites from './Favourites';
import Profile from './Profile';
const MainScreens = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ? { uri: 'https://i0.wp.com/vfhomelessalliance.org/wp-content/uploads/2017/06/home-blue-icon.png?fit=1916%2C1808&ssl=1' }
            : { uri: 'https://tse1.mm.bing.net/th?id=OIP.Ge18i0VpVrV9SGMHd_qRmAHaHA&pid=Api&P=0&h=220' };
          }
          else if (route.name === 'Categories') {
            iconName = focused
            ? { uri: 'https://tse2.mm.bing.net/th?id=OIP.CJi6wXVNYWn3LEnyVo5wwgHaHa&pid=Api&P=0&h=220' }
            : { uri: 'http://cdn.onlinewebfonts.com/svg/img_352144.png' };
          }
          else if (route.name === 'Favourites') {
            iconName = focused
            ? { uri: 'https://www.pinclipart.com/picdir/big/525-5255613_blue-heart-shape-clip-art-clkerm-vector-clip.png' }
            : { uri: 'https://static.vecteezy.com/system/resources/previews/000/365/835/original/favorite-vector-icon.jpg' };
          }
          else if (route.name === 'Profile') {
            iconName = focused
            ? { uri: 'https://tse1.mm.bing.net/th?id=OIP.GcMvhoX6ltp-7JBTFVSiAAAAAA&pid=Api&P=0&h=220' }
            : { uri: 'https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg' };
          }
          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
 //Nguyễn Ngô Thế Cường : 21521905   
    >
     <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Categories" component={Categories} options={{ headerShown: false }}/>
      <Tab.Screen name="Favourites" component={Favourites} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default MainScreens;
