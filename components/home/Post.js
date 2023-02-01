import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Posts } from "../../data/posts";

const Post = () => {
  console.log(Post)
  return (
    <ScrollView contentContainerStyle={{ padding: 5 }}>
      {Posts.map((post, id) => (
        <View key={id} style={{paddingBottom: 10}}>
          <View style={styles.postHeader}>
            <Image source={post.userImage} style={styles.userImage} />
            <Text style={styles.textStyle}>{post.userName}</Text>
          </View>
          <View style={styles.postImage}>
            <Image source={post.image} style={styles.postImage} />
          </View>
          <View style={{ paddingLeft: 5, paddingTop: 2 }}>
            <Image source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png' }} style={{ width: 30, height: 30 }} />
          </View>
          <View style={{ paddingLeft: 5, paddingTop: 2 }}>
            <Text style={styles.textStyle}>{`${post.likes} like${post.likes > 1 ? 's' : ''}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 5, paddingTop: 2 }}>
            <Text style={{ ...styles.textStyle, fontWeight: 'bold' }}>{Posts[0].userName}</Text>
            <Text style={{ ...styles.textStyle, marginLeft: 3 }}>{post.caption}</Text>
          </View>
          {post.comments.map((comment, i) => (
            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingTop: 2 }}>
              <Text style={{ ...styles.textStyle, fontWeight: 'bold' }}>{comment.name}</Text>
              <Text style={{ ...styles.textStyle, marginLeft: 3 }}>{comment.comment}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  userImage: {
    width: 35, 
    height: 35, 
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    marginRight: 10
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
  },
  postImage: {
    width: 500,
    height: 500,
    resizeMode: 'cover'
  }
});

export default Post;