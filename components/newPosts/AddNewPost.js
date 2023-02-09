import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <>
            <Header />
            <FormikPostUploader />
        </>
    )
}

function Header() {
    return <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require('../../assets/back.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Text style={{ color: '#fff', textTransform: 'uppercase', fontSize: 15, fontWeight: '600' }}>New Post</Text>
        <Text></Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default AddNewPost