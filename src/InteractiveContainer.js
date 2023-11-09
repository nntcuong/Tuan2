//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
const InteractiveContainer = ({ post, handleOnLikeClick, handleOnCommentClick, handleOnSharesClick }) => {
  return (
    <View style={styles.interactiveContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleOnLikeClick(post.id)}>
        {post.liked ? (
          <Image source={require('../assets/like2.png')} style={styles.buttonImage} />
        ) : (
          <Image source={require('../assets/like.png')} style={styles.buttonImage} />
        )}
        <Text> Likes </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleOnCommentClick(post.id)}>
        <Image source={require('../assets/chat.png')} style={styles.buttonImage} />
        <Text> Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleOnSharesClick(post.id)}>
        <Image source={require('../assets/send.png')} style={styles.buttonImage} />
        <Text> Shares</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  interactiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight:20,
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default InteractiveContainer;
