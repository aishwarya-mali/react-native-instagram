import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPosts/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen