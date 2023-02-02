import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.separator}/>
  )
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#747474',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})

export default Separator