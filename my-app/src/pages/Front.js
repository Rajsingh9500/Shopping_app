import { View, Text, Dimensions, StyleSheet, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
const wh = Dimensions.get('window').height
const wh1 = Dimensions.get('window').width
import { Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
/* alert(wh) */


export default function Front({ navigation }) {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <View>
                        <Text style={{ color: '#fff' }}><Entypo name="location-pin" size={24} color="white" />Rewa , MP</Text>
                        <Text style={{ fontSize: 26, fontWeight: '900', marginTop: 100, color: "#fff" }}>Spring Sale</Text>
                        <Text style={{ color: '#fff', marginTop: 10, fontSize: 15, fontWeight: '500' }}>
                            Save up to 16k{`\n`}on Sneakers Sale.
                        </Text>

                    </View>
                    <View>
                        <Image style={{ height: 350, width: 200 }} source={require('../img/lvshoe-removebg-preview.png')}></Image>
                    </View>
                </View>
                <View style={styles.search}>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="search" size={24} color="black" />
                        <TextInput style={{ paddingLeft: 10 }} placeholder='Find a brand'></TextInput>
                    </View>
                    <FontAwesome style={{ justifyContent: 'flex-end' }} name="microphone" size={24} color="black" />
                </View>

                <View style={styles.cat}>

                    <Text style={{ paddingHorizontal: 20, fontSize: 19, fontWeight: '600', paddingBottom: 20 }}>Shop by Category</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.cc}>
                                <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.circle}>
                                    <Image style={styles.img} source={require('../img/running-shoes_12084240.png')} />
                                </TouchableOpacity>
                                <Text>
                                    Sneakers
                                </Text>
                            </View>
                            <View style={styles.cc}>
                                <TouchableOpacity onPress={() => navigation.navigate('Sandal')} style={styles.circle1}>
                                    <Image style={styles.img} source={require('../img/flip-flop_2806189.png')}></Image>
                                </TouchableOpacity>
                                <Text>
                                    Sandal
                                </Text>
                            </View>
                            <View style={styles.cc}>
                                <TouchableOpacity onPress={() => navigation.navigate('Climbing')} style={styles.circle1}>
                                    <Image style={styles.img} source={require('../img/boots_2947406.png')}></Image>
                                </TouchableOpacity>
                                <Text>Climbing</Text>
                            </View>
                            <View style={styles.cc}>
                                <TouchableOpacity onPress={() => navigation.navigate('Heels')} style={styles.circle1}>
                                    <Image style={styles.img} source={require('../img/heals.png')}></Image>
                                </TouchableOpacity>
                                <Text>High Heels</Text>
                            </View>
                            <View style={styles.cc}>
                                <TouchableOpacity onPress={() => navigation.navigate('Slider')} style={styles.circle1}>
                                    <Image style={styles.img} source={require('../img/flip flop.png')}></Image>
                                </TouchableOpacity>
                                <Text>
                                    Slides
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.r}>
                    <View style={styles.rec}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                            Recommended
                        </Text>
                        <Text style={{ color: '#808080' }}>
                            View all
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 50, width: 50, }} source={require('../img/nike.png')}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>
                                UrbanPulses {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star-half-empty" size={15} color="#fff" />
                            </Text>
                            <Text style={{ fontSize: 18, marginTop: 10, color: '#fff' }}>Rs-19800</Text>
                        </View>
                        <View>
                            <Image style={styles.img1} source={require('../img/shoesss.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 50, width: 50, resizeMode: 'cover' }} source={require('../img/puma-logo-cover-removebg-preview (1).png')}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>
                                VelocityStride {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star-half-empty" size={15} color="#fff" />
                            </Text>
                            <Text style={{ fontSize: 18, marginTop: 10, color: '#fff' }}>Rs-25690</Text>
                        </View>
                        <View>
                            <Image style={styles.img2} source={require('../img/cheda.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 50, width: 50, }} source={require('../img/nike.png')}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>
                                Adrenaline {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star-half-empty" size={15} color="#fff" />
                            </Text>
                            <Text style={{ fontSize: 18, marginTop: 10, color: '#fff' }}>Rs-15300</Text>
                        </View>
                        <View>
                            <Image style={styles.img3} source={require('../img/shoe_1-removebg-preview.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 40, width: 50, resizeMode: 'contain' }} source={require('../img/nb_logo-removebg-preview.png')}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>
                                StreetSprint {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star" size={15} color="#fff" />
                                <FontAwesome name="star-half-empty" size={15} color="#fff" />
                            </Text>
                            <Text style={{ fontSize: 18, marginTop: 10, color: '#fff' }}>Rs-11199</Text>
                        </View>
                        <View>
                            <Image style={styles.img4} source={require('../img/shoe2-removebg-preview.png')} />
                        </View>
                    </TouchableOpacity>
                </View>


            </ScrollView >
            <View style={{ backgroundColor: '#fff', height: 60, bottom: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, elevation: 5 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Front')}><Entypo name="home" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Like')}><FontAwesome name="heart-o" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Text>MENU</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}><FontAwesome name="bell-o" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><FontAwesome name="user-o" size={24} color="black" /></TouchableOpacity>

            </View>
            <StatusBar backgroundColor={'#9daf9b'}></StatusBar>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9daf9b',
        height: wh / 2.7,
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'row',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30



    },
    search: {
        flexDirection: 'row',

        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        marginTop: -20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        height: wh / 19

    },
    circle: {
        height: 100,
        width: 100,
        backgroundColor: '#9daf9b',
        borderRadius: 50,

    },
    circle1: {
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray'

    },
    cat: {
        height: wh / 3.8,
        paddingTop: 20

    },
    img: {
        height: 70,
        width: 70,
        resizeMode: 'cover',
        marginLeft: 18,
        marginTop: 13


    },
    cc: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        paddingHorizontal: 10,
        paddingBottom: 10

    },
    r: {
        height: wh / 1,

        paddingHorizontal: 20

    },
    rec: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rect: {
        height: wh / 5.6,

        backgroundColor: 'red',

        backgroundColor: '#9daf9b',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: 40


    }
    , img1: {
        height: 240,
        width: 200,
        marginTop: -60,
        transform: [{ rotate: '40deg' }]
    },
    img2: {
        height: 150,
        width: 150,
        marginLeft: 80,
        marginTop: -30,

        transform: [{ rotate: '20deg' }]
    },
    img3: {
        height: 250,
        width: 250,
        marginLeft: 30,
        resizeMode: 'cover',
        marginTop: -65,


        transform: [{ rotate: '0deg' }]
    },
    img4: {
        height: 200,
        width: 200,
        marginLeft: 30,
        resizeMode: 'cover',
        marginTop: -35,


        transform: [{ rotate: '-30deg' }]
    }
})