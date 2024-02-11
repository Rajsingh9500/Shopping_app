import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const wh = Dimensions.get('window').height
const wh1 = Dimensions.get('window').width

import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

const data = [
    {
        image: require('../img/shoesss.png'),
        logo: require('../img/Logo_nike_principal-removebg-preview.png'),
        title: 'UrbanPulses',
        price: 'Rs-19800',
        id: 1,
    },
    {

        image: require('../img/cheda.png'),
        logo: require('../img/puma-logo-and-art-free-vector-removebg-preview.png'),
        title: 'VelocityStride',
        price: 'Rs-25690',
        id: 2,
    },
    {
        image: require('../img/shoe_1-removebg-preview.png'),
        logo: require('../img/Logo_nike_principal-removebg-preview.png'),
        title: 'Adrenaline',
        price: 'Rs-15300',
        id: 3,
    }, {
        image: require('../img/shoe2-removebg-preview.png'),
        logo: require('../img/NB.png'),
        title: 'StreetSprint',
        price: 'Rs-11199',

        id: 4,
    },
    {
        image: require('../img/ascis-removebg-preview.png'),
        logo: require('../img/asics-logo-removebg-preview.png'),
        title: 'Ascis Sports',
        price: 'Rs-9800',
        id: 5,
    },
    {
        image: require('../img/addidas-removebg-preview.png'),
        logo: require('../img/addidas-logo-removebg-preview.png'),
        title: 'Addidas Running',
        price: 'Rs-10999',
        id: 6,
    },
    {
        image: require('../img/u_a-removebg-preview.png'),
        logo: require('../img/UNDER.png'),
        title: 'U & A Walking',
        price: 'Rs-8800',
        id: 7,
    },


]
export default function Shop({ navigation, route }) {
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
                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[5])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 40, width: 50, resizeMode: 'contain' }} source={data[5].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[5].title} {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[5].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img5} source={data[5].image} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Product', data[6])} style={styles.rect}>

                        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
                            <Image style={{ height: 40, width: 50, resizeMode: 'contain' }} source={data[6].logo}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>
                                {data[6].title} {`\n`}

                            </Text>
                            <Text style={{ marginTop: -20, }}>
                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star" size={15} color="#000" />

                                <FontAwesome name="star" size={15} color="#000" />
                                <FontAwesome name="star-half-empty" size={15} color="#000" />
                            </Text>
                            <Text style={{ fontSize: 13, letterSpacing: 1, marginTop: 10, color: '#000' }}>{data[6].price}</Text>
                        </View>
                        <View>
                            <Image style={styles.img6} source={data[6].image} />
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
    },
    img5: {
        height: 200,
        width: 150,
        marginLeft: 30,
        resizeMode: 'contain',
        marginTop: -35,


        transform: [{ rotate: '0deg' }],
        marginLeft: 50
    },
    img6: {
        height: 220,
        width: 200,
        marginLeft: 30,
        resizeMode: 'contain',
        marginTop: -45,


        transform: [{ rotate: '-50deg' }],
        marginLeft: 30
    }
})