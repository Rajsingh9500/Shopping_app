import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const wh = Dimensions.get('window').height
const wh1 = Dimensions.get('window').width

import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

const data = [
    {
        image: require('../img/nike-canyon-sandal-blackchlorine-blue-turf-orange-sail-6052e5a6c8132-removebg-preview.png'),
        logo: require('../img/Logo_nike_principal-removebg-preview.png'),
        title: 'Canyon Sandal',
        price: 'Rs-3300',
        id: 1,
    },
    {

        image: require('../img/puma_slleper-removebg-preview.png'),
        logo: require('../img/puma-logo-and-art-free-vector-removebg-preview.png'),
        title: 'Sports Sandal',
        price: 'Rs-3190',
        id: 2,
    },
    {
        image: require('../img/sleeper-removebg-preview.png'),
        logo: require('../img/Logo_nike_principal-removebg-preview.png'),
        title: 'Casual Sleeper',
        price: 'Rs-1690',
        id: 3,
    }, {
        image: require('../img/U_a-removebg-preview (1).png'),
        logo: require('../img/NB.png'),
        title: 'Street Sleeper',
        price: 'Rs-1400',

        id: 4,
    },
    {
        image: require('../img/adidas_sandal-removebg-preview.png'),
        logo: require('../img/addidas-logo-removebg-preview.png'),
        title: 'Sports Sandal',
        price: 'Rs-10999',
        id: 5,
    },



]
export default function Sandal({ navigation, route }) {
    return (
        <>
            <View style={styles.container}>

                <View style={styles.bars}>
                    <TouchableOpacity onPress={() => navigation.navigate('Front')} style={{ flexDirection: 'row' }}>
                        <AntDesign name="arrowleft" size={27} color="black" />
                        <Text s>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="search" size={27} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[0])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 50, width: 50, }} source={data[0].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[0].title}{`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[0].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img1} source={data[0].image} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[1])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 50, width: 50, resizeMode: 'cover' }} source={data[1].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[1].title} {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[1].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img2} source={data[1].image} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[2])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 50, width: 50, }} source={data[2].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[2].title} {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[2].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img3} source={data[2].image} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[3])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 40, width: 50, resizeMode: 'contain' }} source={data[3].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[3].title} {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[3].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img4} source={data[3].image} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[4])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 40, width: 50, resizeMode: 'contain' }} source={data[4].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[4].title} {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[4].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img5} source={data[4].image} />
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9daf9b',
        height: wh,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    bars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    rect: {
        height: wh / 5.6,
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: 40
    }
    , img1: {
        height: 240,
        width: 200,
        marginTop: -60,
        /*   transform: [{ rotate: '40deg' }], */
        resizeMode: 'contain',
        marginLeft: 30
    },
    img2: {
        height: 150,
        width: 150,
        marginLeft: 80,

        resizeMode: 'contain',

    },
    img3: {
        height: 170,
        width: 250,

        resizeMode: 'contain',




    },
    img4: {
        height: 200,
        width: 200,
        marginLeft: 30,
        resizeMode: 'contain',
        marginTop: -20,



    },
    img5: {
        height: 200,
        width: 150,
        marginLeft: 30,
        resizeMode: 'cover',
        marginTop: -35,



        marginLeft: 50
    },

})