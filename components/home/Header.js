import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/header-logo.png')}
        alt='Instagram Logo'
      />

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png' }}
            alt='New Post'
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png' }}
            alt='Like'
          /></TouchableOpacity>
        <TouchableOpacity style={{ position: 'relative' }}>
          <Image
            style={styles.icons}
            source={{ uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png' }}
            alt='Messenger'
          />
          <Text style={styles.badge}>11</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 45
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  badge: {
    backgroundColor: '#ff3250',
    color: '#fff', 
    position: 'absolute', 
    top: -5, 
    right: -5, 
    fontSize: 10, 
    padding: 2, 
    borderRadius: 5
  }
})