//Nguyễn Ngô Thế Cường : 21521905
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const postData = [
    {
      id: 1,
      profileImage: 'https://wall.vn/wp-content/uploads/2019/11/hinh-anh-joker-23-768x432.jpg',
      userName: "Joker",
      postText: "Amazing...",
      postImage: "https://i.pinimg.com/originals/af/0b/01/af0b01580498f0bda214bc70fdfeaa2d.jpg",
      likes: 23009,
      comments: 1341,
      shares: 233,
    },
    {
      id: 2,
      profileImage: 'https://ae01.alicdn.com/kf/HTB1upfOPVXXXXbUXXXXq6xXFXXXI/Cool-Batman-Car-Stickers-12-11cm-Batman-DC-Dark-Knight-Car-Window-Vinyl-Decal-Sticker-Car.jpg',
      userName: "Batman",
      postText: "Madness is like gravity. All it takes is a little push.",
      postImage: "https://hdqwalls.com/wallpapers/batman-vs-joker-a1.jpg",
      likes: 1009,
      comments: 457,
      shares: 122,
    },
    {
      id: 3,
      profileImage: 'https://i.pinimg.com/736x/0a/0e/15/0a0e1505e84895a3b44be67e8b8868c1--quinzel-harley-quinn.jpg',
      userName: "Harley Quinn",
      postText: " I'll show ya how valuable I am! ",
      postImage: "https://images.hdqwalls.com/download/joker-and-harley-quinn-love-4k-0u-2560x1440.jpg",
      likes: 14009,
      comments: 957,
      shares: 792,
    },
  
  ];
  //Nguyễn Ngô Thế Cường : 21521905
const PostItem = ({ post, handleOnLikeClick, handleOnCommentClick, handleOnSharesClick }) => {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.profileImage }} style={styles.profileImage} />
        <Text style={styles.text}>{post.userName}</Text>
      </View>

      <Text>{post.postText}</Text>
      <Image source={{ uri: post.postImage }} style={styles.postImage} />
      <View style={styles.statContainer}>
        <Text><Text>{post.likes}</Text> Likes</Text>
        <Text><Text>{post.comments}</Text> Comments</Text>
        <Text><Text>{post.shares}</Text> Shares</Text>
      </View>
      <View style={styles.horizontalLine}></View>
    </View>
  );
};
//Nguyễn Ngô Thế Cường : 21521905
const styles = StyleSheet.create({
  post: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 25,
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 25,
    marginVertical: 10,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    height: 1,
    marginVertical: 10,
    backgroundColor: '#ccc',

  },
});

export default PostItem;
