import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import Separator from '../components/Separator'
import BottomTabs from '../components/home/BottomTabs'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <Separator />
      <Post />
      <Separator />
      <BottomTabs />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
})