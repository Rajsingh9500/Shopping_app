import { View, Text, Dimensions, StyleSheet, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function Login({ navigation }) {
    return (
        <View style={{ backgroundColor: '#9daf9b' }}>
            <ScrollView>
                <View style={styles.icons} >
                    <View style={styles.back}>
                        <View style={{ alignItems: 'center', }} >
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Profile')}>
                                <AntDesign style={{ marginRight: 10, marginTop: 5 }} name="arrowleft" size={40} color="#333" />
                                <Text style={{
                                    marginRight: 10, fontSize: 24,
                                    fontWeight: '500', color: '#333',
                                }}>Login</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                    <View style={{ alignItems: 'flex-end', }}>
                        <TouchableOpacity style={{ backgroundColor: '#f4f2f4', height: 50, width: 50, justifyContent: 'center', alignItems: 'center', marginRight: 40, marginTop: -100, borderRadius: 10 }} >
                            <Feather name="info" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: height / 5 }}></View>
                <View style={styles.cir}>
                    <View style={styles.circle1}>
                        <View style={styles.circle2}>
                            <View style={styles.circle3}>
                                <Text style={styles.txt}>Email or Phone Number</Text>
                                <TextInput style={styles.input} placeholderTextColor={'#3e4b68'} placeholder='Email....'></TextInput>

                                <Text style={styles.txt1}>Password</Text>
                                <TextInput style={styles.input} placeholderTextColor={'#3e4b68'} placeholder='Password....'></TextInput>

                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.log}>
                                        Log In
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>



                </View>
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    icons: {

        height: height / 3.2,

        backgroundColor: '#9daf9b'




    },
    back: {
        height: 150,
        width: 300,

        borderRadius: 200,
        backgroundColor: '#fff',
        transform: [{ translateX: -70, }],
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'


    },

    cir: {
        height: height / 1.7,


    },
    circle1: {
        height: 400,
        width: 400,
        backgroundColor: '#f2f3f5',
        borderRadius: 300,
        transform: [{ scale: 2 }],


    }
    ,
    circle2: {
        height: 400,
        width: 400,
        backgroundColor: '#e9eaee',
        borderRadius: 200,
        transform: [{ scale: 1 }],
        marginTop: 60

    }
    ,
    circle3: {
        height: 400,
        width: 400,
        backgroundColor: '#9daf9b',
        borderRadius: 200,
        transform: [{ scale: 1 }],
        marginTop: 50,
        alignItems: 'center'

    },
    log: {
        color: '#333',
        marginTop: 15,

        paddingHorizontal: 20,
        padding: 3,
        borderRadius: 30,
        fontSize: 10,

        backgroundColor: '#fff'

    }
    ,
    /*    sign: {
           color: '#3255ed',
           marginTop: 20,
           borderWidth: 2,
           paddingHorizontal: 20,
           padding: 3,
           borderRadius: 30,
           fontSize: 12,
           borderColor: '#3255ed'
   
       } */

    txt: {
        marginTop: 35,
        color: '#fff',


        fontSize: 8,
        marginBottom: 4,
        marginRight: 43
    },
    txt1: {
        marginTop: 10,
        color: '#fff',


        fontSize: 8,
        marginBottom: 4,
        marginRight: 110
    },
    input: {
        fontSize: 8,
        backgroundColor: '#fff',
        borderRadius: 5,

        height: 30,

        width: width / 2.5,
        padding: 5,
        marginLeft: 5,


    }
})