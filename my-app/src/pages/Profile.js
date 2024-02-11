import { View, Text, Dimensions, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome, EvilIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
export default function Profile({ navigation }) {
    return (
        <>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.navigate('Front')}>
                    <AntDesign name="left" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontWeight: '500', color: '#fff' }}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
            <View style={styles.profilepic}>
                <View style={styles.pic}>
                    <Image style={{ height: 150, width: 150, borderRadius: 75 }} source={require('../img/p1.jpg')} />
                </View>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', paddingTop: 10 }}>Raj Singh</Text>
                <TouchableOpacity style={styles.add}>
                    <Text style={{ color: '#333', fontWeight: '500', fontSize: 15 }}>Your Order</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.add}>
                    <Text style={{ color: '#333', fontWeight: '500', fontSize: 15 }}>Help Centers </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.add}>
                    <Text style={{ color: '#333', fontWeight: '500', fontSize: 15 }}>Get Premium</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.rect}>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: "#333",

                    }}>Login</Text>



                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.rect}>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: "#333"
                    }}>Sign In </Text>



                </TouchableOpacity>





            </View>

            <StatusBar backgroundColor={'#9daf9b'}></StatusBar>
        </>
    )

}
const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#9daf9b',
        flex: .1,
    },
    profilepic: {
        flex: .7,
        backgroundColor: '#9daf9b',
        alignItems: 'center',

    },
    pic: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    add: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        paddingHorizontal: 20,
        borderRadius: 30,

        height: 50,
        alignItems: 'center',
        marginTop: 25,

    }
    ,
    numtxt: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff'
    },
    numtxt1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'

    },
    numline: {
        fontSize: 40,
        color: 'gray',
        fontWeight: '300'
    },
    bottom: {
        flex: .2,
        backgroundColor: '#9daf9b',
        paddingHorizontal: 30,
        paddingTop: 50,
        justifyContent: 'center'


    },

    rect: {

        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 20,

        justifyContent: 'center',
        alignItems: 'center'


    }

})