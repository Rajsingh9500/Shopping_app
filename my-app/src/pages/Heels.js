import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const wh = Dimensions.get('window').height
const wh1 = Dimensions.get('window').width

import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

const data = [
    {
        image: require('../img/Alexander_McQueen-removebg-preview.png'),
        logo: require('../img/Alexander-Mcqueen-Logo-removebg-preview.png'),
        title: 'Alexander McQueen',
        price: 'Rs-13300',
        id: 1,
    },
    {

        image: require('../img/jimmy_choo-removebg-preview.png'),
        logo: require('../img/Jimmy_Choo_logo.svg-removebg-preview.png'),
        title: 'Jimmy Choo',
        price: 'Rs-13190',
        id: 2,
    },
    {
        image: require('../img/manolo_Blahnk-removebg-preview.png'),
        logo: require('../img/manolo-blahnik-logo-removebg-preview.png'),
        title: 'Manolo Blahnik',
        price: 'Rs-16900',
        id: 3,
    }, {
        image: require('../img/Valentino-removebg-preview.png'),
        logo: require('../img/valentino_logo-removebg-preview.png'),
        title: 'Valentino ',
        price: 'Rs-14000',

        id: 4,
    },
    {
        image: require('../img/prada-removebg-preview.png'),
        logo: require('../img/prada-logo-01-freelogovectors.net_-removebg-preview.png'),
        title: 'Prada',
        price: 'Rs-17999',
        id: 5,
    },



]
export default function Heels({ navigation, route }) {
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
                            <Image style={{ height: 50, width: 100, }} source={data[0].logo}></Image>
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
                            <Image style={{ height: 50, width: 120, }} source={data[2].logo}></Image>
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
        height: 200,
        width: 180,

        /*   transform: [{ rotate: '40deg' }], */
        resizeMode: 'contain',
        marginTop: -10

    },
    img2: {
        height: 150,
        width: 200,
        marginLeft: 40,

        resizeMode: 'contain',

    },
    img3: {
        height: 170,
        width: 220,

        resizeMode: 'contain',




    },
    img4: {
        height: 140,
        width: 200,
        marginLeft: 80,
        resizeMode: 'contain',




    },
    img5: {
        height: 200,
        width: 220,
        marginLeft: 30,
        resizeMode: 'contain',




        marginLeft: 50
    },

})