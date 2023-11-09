//Nguyễn Ngô Thế Cường : 21521905
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './src/Header';
import PostItem from './src/PostItem';
import InteractiveContainer from './src/InteractiveContainer';
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
const App = () => {
  const [posts, setPosts] = useState([...postData]);

  const handleOnCommentClick = (postId) => {
    const updatePosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments + 1,
          };
        }
        return post;
      });
      setPosts(updatePosts);
  };

  const handleOnSharesClick = (postId) => {
    const updatePosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            shares: post.shares + 1,
  
          };
        }
        return post;
      });
  
      setPosts(updatePosts);
  };
//Nguyễn Ngô Thế Cường : 21521905
  const handleOnLikeClick = (postId) => {
    const updatePosts = posts.map(post => {
        if (post.id === postId) {
          if (post.liked) {
            return {
              ...post,
              likes: post.likes - 1,
              liked: false,
  
            }
          }
          else {
            return {
              ...post,
              likes: post.likes + 1,
              liked: true,
            }
          }
        }
        return post
      });
      setPosts(updatePosts);
  };
//Nguyễn Ngô Thế Cường : 21521905
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        {posts.map(post => (
          <View key={post.id}>
            <PostItem
              post={post}
              handleOnLikeClick={handleOnLikeClick}
              handleOnCommentClick={handleOnCommentClick}
              handleOnSharesClick={handleOnSharesClick}
            />
            <InteractiveContainer
              post={post}
              handleOnLikeClick={handleOnLikeClick}
              handleOnCommentClick={handleOnCommentClick}
              handleOnSharesClick={handleOnSharesClick}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
