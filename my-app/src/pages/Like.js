import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, } from '@expo/vector-icons';
StatusBar
export default function Like({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.navigate('Front')}>
                        <AntDesign name="left" size={24} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: '500', color: '#333' }}>Wishlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="#333" />
                    </TouchableOpacity>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>No Items in the Wishlist</Text>
                </View>
            </View>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}></StatusBar>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 10

    },
})