import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Users } from '../../data/users'

const Stories = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                {Users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </View>
        </ScrollView>
    )
}

function User({ user }) {
    const userName = user.name.length > 11 ? user.name.slice(0, 11) + '...' : user.name
    return (
        <View style={styles.userContainer}>
            <Image
                source={user.image}
                style={styles.user}
            />
            <Text style={{ color: 'white' }}>{userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    userContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100
    },
    user: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderColor: 'orange',
        borderWidth: 3
    },
})

export default Stories