import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bottomTabIcons } from '../../data/bottomTabIcons'

export default function BottomTabs() {
    const [activeTab, setActiveTab] = React.useState('Home')
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 5 }}>
            {bottomTabIcons.map((icon, i) => (
                <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                    <Image
                        key={i}
                        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                        style={styles.iconStyles}
                    />
                </TouchableOpacity>
            ))}
           <TouchableOpacity onPress={() => setActiveTab('Profile')}>
            <Image source={require('../../assets/users/anne.jpg')} style={{ ...styles.iconStyles, borderRadius: 50 }} />
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyles: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})